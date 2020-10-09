const APP_DETAILS = require('../models').app_details;

const createAppDetails = async (app_instance) => {
  try {
    const exist = await appDetailsExists(app_instance.name);
    if (exist) {

      return {ok: false, message: 'app_details already exists'};

    }
  
    const app_details = await APP_DETAILS.create();
    await app_details.setAPP(app_instance);

    return {ok: true, message: 'app_detail instance created and associated'};

  } catch (error) {

    return {ok: false, message: error.message};

  }
};

const findAppDetails = async (app_name) => {

  return await APP_DETAILS.findOne({
    where: {app_name: app_name},
  });
  
};

const appDetailsExists = async (app_name) => {
  const result = await findAppDetails(app_name);
  if (result === null) {

    return false;

  }

  return true;

};

module.exports = {
  createAppDetails,
  findAppDetails,
  appDetailsExists,
};
