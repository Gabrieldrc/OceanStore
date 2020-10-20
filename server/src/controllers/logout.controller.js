const logoutController = require('express').Router();

logoutController.get('/', (req, res) => {
  let resObject = {
    status: 'Access Denied',
    message: '',
  };
  
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
