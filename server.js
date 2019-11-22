const app = require("express")();
const loaders = require("./loaders");

exports.start = () => {
  loaders(app);

  app.use((req, res, next) => {
    res.status(404).send("Not found");
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, console.log(`Server started on port ${PORT}`));
};
