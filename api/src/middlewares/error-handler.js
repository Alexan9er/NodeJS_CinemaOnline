module.exports = (err, req, res, next) => {
  res.status(err.status ? err.status : 500).send({ message: err.message });
};
