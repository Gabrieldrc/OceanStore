const publicAuth = (req, res, next) => {
  if (!req.session.auth) {
    req.session.user = {
      role: 'guest'
    };
  }
  next();
};

module.exports = {
  middleware: publicAuth
};