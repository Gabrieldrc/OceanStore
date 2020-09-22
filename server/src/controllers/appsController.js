const express = require('express');
const appsController = express.Router();
const upload = require("../middleware/upload");
const appService = require('../services/appService');
const fs = require("fs");

appsController.post('/new_app', async (req, res) => {
  try{
    // if (req.file == undefined) {
    //   return res.status(400).send(`You must select a file.`);
    // }
    const {app_name, app_price, app_category, app_creator} = req.body;

    if (!app_name || !app_price || !app_category) {

      return res.status(400).send(`You must send name, price and category.`);

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

    return res.status(201).send(`app created: ${app_name}`);

  }catch(error) {

    return res.status(400).send(error);

  }
});

appsController.get('/store', async (req, res) => {
  try {
    const apps = await appService.findAllApps();
    return res.status(200).send(apps);
  } catch (error) {
    return res.status(400).send(error);
  }
})

module.exports = appsController;