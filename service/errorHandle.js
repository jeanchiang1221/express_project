const errorHandle = function (res, error) {
  res.status(400).send({
    status: "FALSE",
    error,
  });
};
module.exports = errorHandle;
