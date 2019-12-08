module.exports = route => {
  return async (req, res, next) => {
    try {
      console.log("SOME LOGIC TRY");
      await route(req, res, next);
    } catch (err) {
      console.log("SOME ERROR CATCH");
      next(err);
    }
  };
};
