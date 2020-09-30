const publicAuth = (req, res, next) => {
  if (!req.session.auth) {
    req.session.user = {
      role: 'guest'
    };
  }
  console.log(req.session.user);
  next();
};

module.exports = {
  middleware: publicAuth
};