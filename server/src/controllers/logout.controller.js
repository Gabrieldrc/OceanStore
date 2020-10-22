const logoutController = require('express').Router();
const ac = require('../config/ac.config');

logoutController.get('/', (req, res) => {
  const permission = ac.can(req.session.user.role).deleteOwn('session');
  let resObject = {
    status: 'Access Denied',
    message: '',
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);

  }
  req.session.destroy(error => {
    if (error) {
      return res.status(400).json(error);
    }

    resObject.status = 'OK';
    resObject.message = 'log out succesfully'
    return res.status(200).json(resObject);

  });
});

module.exports = logoutController;
