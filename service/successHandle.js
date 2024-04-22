const successHandle = function (res, data) {
  res.send({
    status: "success",
    data,
  });
};

module.exports = successHandle;
