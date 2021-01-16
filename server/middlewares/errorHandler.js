function errorHandler(err, req, res, next) {
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({ message: err.errors[0].message });
  } else {
    return res.status(404).json({ message: "data not found" });
  }
}

module.exports = errorHandler;
