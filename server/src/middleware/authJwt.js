const jwtService = require('../services/jwtService');

const authJwt = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({
      status:'Access Denied',
      message: 'No token provided!',
    });
  }
  jwtService.verifyToken(token, function(err, decoded) {
    if (err) {
      return res.send(err);
    } else {
      req.session.user = decoded;
      next();
    }
  });
};

module.exports = {
  middleware: authJwt
};