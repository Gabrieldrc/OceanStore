const auth = (req, res, next) => {
  if (req.session && req.session.user && req.session.admin) {
    return next();
  }
  return res.status(401).send('Not authorized');
}