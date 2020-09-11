const express = require('express');
const userController = express.Router();
const { userService } = require('../config/services');
const User = require('../models/User');

//PATH TO ADD AN USER
userController.post('/new_user', (req, res) => {
  //check if recieve by @req the user_name AND password
  if (!req.body['user_name'] || !req.body['password']) {
    //if not response a 400 status
    return res.status(400).send('Send user_name and password');
  } 
  
  //create a user instance with the data from the @req
  //and sended to the user service
  const user = new User(req.body['user_name'], req.body['password']);
  const returnedPromise = userService.newUser(user);
  //returns a promise

  returnedPromise.then(result => {
    //@result is an instance of User
    // check if the @ok propertie of @result is true
    console.log(result);
    if (result.ok()) {
      //if it is, send a 201 status with the message of the from the user instance function
      return res.status(201).send(result.message());
    }
    //if it's NOT, send a 400 status with the message of the from the user instance function with the ERROR message
    return res.status(400).send(result.message());
  });
});

//PATH TO LOG AN USER
userController.post('/login', (req, res) => {
  //check if recieve by @req the user_name AND password
  if (!req.body['user_name'] || !req.body['password']) {
    //if not response a 400 status
    return res.status(400).send('Send user_name and password');
  } 
  
  //create a user instance with the data from the @req
  //and sended to the user service
  const user = new User(req.body['user_name'], req.body['password']);
  const returnedPromise = userService.login(user);

  returnedPromise.then(result => {
    //@result is an instance of User
    // check if the @ok propertie of @result is true
    if (result.ok()) {
      //if it is, send a 201 status with the message of the from the user instance function
      return res.status(200).send(result.message());
    }
    //if it's NOT, send a 400 status with the message of the from the user instance function with the ERROR message
    return res.status(400).send(result.message());
  });
});

module.exports = userController;