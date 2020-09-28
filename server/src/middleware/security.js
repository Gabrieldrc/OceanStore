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
    req.session.role = 'user';
    console.log(req.session.role);
    next();
  } else {
    console.log('No auth')
    req.session.role = 'guest';
    console.log(req.session.role);
    next();
  }
};

module.exports = {
  security: security
};