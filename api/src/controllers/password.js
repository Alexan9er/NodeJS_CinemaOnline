const UserRepository = require("../repositories/user");
const userRepository = new UserRepository();

const Rabbit = require("../classes/rabbit");
const config = require("../config");

class Password {
  async recover(req, res) {
    const { email } = req.user;

    const user = await userRepository.getUser({ email });

    //Generate and set password reset token
    user.generatePasswordReset();

    // Save the updated user object
    user
      .save()
      .then(user => {
        let link = `http://${req.headers.host}/api/password/reset/${user.resetPasswordToken}`;

        Rabbit.sendToQueue(config.rabbitMQ.emailsQueue, {
          recipient: user.email,
          emailMessage: `<h1>Hi ${user.firstName}</h1> <br/> 
          Please click on the following <a href=${link}>link</a> to reset your password. <br/> 
          If you did not request this, please ignore this email and your password will remain unchanged.\n`
        });
        res.status(200).json({
          message: `A reset email has been sent to ${user.email}.`
        });
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }

  async resetPassword(req, res) {
    const user = await userRepository.getUser({
      resetPasswordToken: req.params.token
    });

    if (!user || Date.now() > new Date(user.resetPasswordExpires).getTime()) {
      return res
        .status(401)
        .json({ message: "Password reset token is invalid or has expired." });
    }

    user.password = req.body.password;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    user
      .save()
      .then(() => {
        Rabbit.sendToQueue(config.rabbitMQ.emailsQueue, {
          recipient: user.email,
          emailMessage: `<h1>Hi ${user.firstName}</h1> <br/> 
          This is a confirmation that the password for your account ${user.email} has just been changed.\n`
        });
        res.status(200).json({ message: "Your password has been updated." });
      })
      .catch(err => res.status(500).json({ message: err.message }));
  }
}

module.exports = Password;
