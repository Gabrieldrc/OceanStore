const jwt = require('jsonwebtoken');

const generateToken = function (user) {
  const privateKey = fs.readFileSync(__basedir+'/src/config/private.key');
  const token = jwt.sign(user, privateKey, {
    expiresIn: "24h",
    algorithm: 'RS256'
  });
  return token;
};

module.exports = {
  generateToken: generateToken,
};