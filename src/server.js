const app = require("express")();
const loaders = require("./loaders");

const notFound = require("./middlewares/not-found");

exports.start = () => {
  loaders(app);

  app.use(notFound);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, console.log(`Server started on port ${PORT}`));
};
