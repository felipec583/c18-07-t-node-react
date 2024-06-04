const errorMessageInterceptor = (req, res, next) => {
  const errorMessageResponse = res.json;

  res.json = function (body) {
    res.locals.body = body;

    return errorMessageResponse.apply(this, arguments);
  };

  next();
};

export default errorMessageInterceptor;
