const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

const generateToken = function (user) {
  const token = jwt.sign(user, config.secret, {
    expiresIn: "24h"
  });
  return token;
};

const verifyToken = function(token, callbackFunction) {
  jwt.verify(token, config.secret, callbackFunction);
};

module.exports = {
  generateToken: generateToken,
  verifyToken: verifyToken,
};