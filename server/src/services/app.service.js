const fs = require("fs");
const db = require('../models');
const userService = require('./userService');
const detailsService = require('./app_details.service');
const Image = db.images;
const App = db.apps;

const createApp = async (appData) => {
  try {
    const exist = await appNameExist(appData.name);
    if (exist) {

      return {ok: false, message: 'name already used'};

    }
    const app = await App.create({
      name: appData.name,
      price: appData.price,
      category: appData.category? appData.category : "none",
    });
    let result = await userService.addAppToUser(appData.publisher, app);
    if (!result.ok) {

      return result;

    }
    result = await detailsService.createAppDetails(app);
    if (!result.ok) {

      return result;

    }

    return {ok: true, message: `created succesfully app: ${appData.name}`};


  }catch(error) {

    return {ok: true, message: error.message};

  }
};

const createAppImage = async (imgData) => {
  try {
    await Image.create({
      type: imgData.type,
      name: imgData.name,
      app: imgData.app,
      data: imgData.data,
    })

    return `created succesfully image: ${imgData.name}`;

  }catch(error) {
    console.log('\n\ncreateImage');
    console.log(error)
    throw error;
  }
}

const findAllApps = async () => {
  try {
    console.log('\n\nLooking for apps...\n\n');
    const apps = await App.findAll();

    return apps.map(app => app);

  } catch (error) {
    console.log('\n\nfindAppps');
    console.log(error)
    throw error;
  }
}

const appNameExist = async (name) => {
  const result = await findApp(name);
  
  if (result === null) {

    return false;

  }

  return true;

};

const findApp = async (name) => {

  return await App.findOne({
    where: {name: name},
  });
  
};

module.exports = {
  createApp,
  createAppImage,
  findAllApps,
  findApp,
}