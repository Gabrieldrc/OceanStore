const security = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, key, function (err, decoded) {
      if (err) {
        return res.send(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
  req.decode = {role: 'guest'};
  next();
};

module.exports = {
  security: security
};