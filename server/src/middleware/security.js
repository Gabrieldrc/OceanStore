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
  if (req.session.auth) {
    console.log('Si auth')
    req.decode = {role: 'user'};
    console.log(req.decode);
    next();
  } else {
    console.log('No auth')
    req.decode = {role: 'guest'};
    console.log(req.decode);
    next();
  }
};

module.exports = {
  security: security
};