const express = require('express');
const appsController = express.Router();
const appService = require('../services/appService');
// const fs = require('fs');
const authJwt = require('../middleware/authJwt');
const ac = require('../config/ac.config');

appsController.post('/new_app',authJwt.middleware, async (req, res) => {
  const permission = ac.can(req.session.user.role).createOwn('app');
  const resObject = {
    status: 'Access Denied',
    message: '',
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);
    
  }
  try{
    // if (req.file == undefined) {
    //   return res.status(400).send(`You must select a file.`);
    // }
    const {app_name, app_price, app_category, app_creator} = req.body;

    if (!app_name || !app_price || !app_category) {
      resObject.message = `You must send name, price and category.`;

      return res.status(400).json(resObject);

    }
    const appData = {
      name: app_name,
      price: app_price,
      category: app_category,
      creator: app_creator? app_creator : "none",
    }
    // const imgData = {
    //   app: app_name,
    //   type: req.file.mimetype,
    //   name: req.file.originalname,
    //   data: fs.readFileSync(
    //     __basedir + "/resources/static/assets/uploads/" + req.file.filename
    //   ),
    // };
    await appService.createApp(appData);
    // await appService.createAppImage(imgData);

    resObject.status = 'ok';
    resObject.message = `app created: ${app_name}`;

    return res.status(201).json(resObject);

  }catch(error) {
    resObject.message = error;

    return res.status(400).json(resObject);

  }
});

appsController.get('/store', async (req, res) => {
  const permission = ac.can(req.session.user.role).readAny('app');
  const resObject = {
    status: 'Access Denied',
    message: "",
  };
  if (!permission.granted) {
    resObject.message = 'You are not authorized to access this resource';

    return res.status(403).json(resObject);
    
  }
  try {
    const apps = await appService.findAllApps();

    return res.status(200).json(apps);

  } catch (error) {
    resObject.message = error;

    return res.status(400).json(resObject);

  }
})

module.exports = appsController;