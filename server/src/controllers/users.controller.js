const usersController = require('express').Router();
const userService = require('../services/userService');
const jwtService = require('../services/jwtService');
const ac = require('../config/ac.config');

usersController.post('/signup', async (req, res) => {
  const permission = ac.can(req.session.user.role).createAny('user');
  const {user_name, password} = req.body;
  const resObject = {
    status: 'Access Denied',
    message: '',
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);

  }
  if (!user_name || !password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).json(resObject);

  }
  const userData = {
    user_name: user_name,
    password: password,
  }
  const result = await userService.createUser(userData);

  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).send(resObject);

  }
  resObject.status = 'ok';
  resObject.message = `user created: @${user_name}`;
  return res.status(201).send(resObject);

});

usersController.post('/signin', async (req, res) => {
  const permission = ac.can(req.session.user.role).createOwn('session');
  const {user_name, password} = req.body;
  let resObject = {
    status: 'Access Denied',
    message: "",
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);

  }
  if (!user_name || !password) {
    resObject.message = `Send 'user_name' and 'password'`;

    return res.status(400).json(resObject);

  }
  let userData = {
    user_name: user_name,
    role: 'user'
  }
  const result = await userService.loginUser({...userData, password: password});
  if (!result.ok) {
    resObject.message = result.message;

    return res.status(400).json(resObject);

  }
  const token = jwtService.generateToken(userData);
  req.session.auth = true;
  req.session.user.role = 'user';
  userData.accessToken = token;

  return res.status(201).json(userData);

});

module.exports = usersController;