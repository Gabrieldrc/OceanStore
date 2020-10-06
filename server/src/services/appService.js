const fs = require("fs");
const db = require('../models');
const Image = db.images;
const App = db.apps;
const createApp = async (appData) => {
  try {
    App.create({
      name: appData.name,
      price: appData.price,
      category: appData.category? appData.category : "none",
      creator: appData.creator,
    })

    return `created succesfully app: ${appData.name}`;

  }catch(error) {
    console.log('\n\ncreateApp');
    console.log(error)
    throw error;
  }
};

const createAppImage = async (imgData) => {
  try {
    Image.create({
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

module.exports = {
  createApp,
  createAppImage,
  findAllApps,
}