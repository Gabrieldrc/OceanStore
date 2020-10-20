const DEVELOPER = require('../models').developers;
const bcrypt = require('bcrypt');

const createDeveloper = async (developerData) => {
  try {
    const exist = await developerExists(developerData.user_name);
    if (exist) {
  
      return {ok: false, message: `developer @${developerData.user_name} already exists`};
  
    }
  
    return bcrypt.hash(developerData.password, 10)
    .then(async (hash) => {
      const developer = await DEVELOPER.create({
        user_name: developerData.user_name,
        password: hash,
      })

      return {ok: true, message: `developer @${developer.user_name} created`};

    })
  } catch (error) {

    return {ok: false, message: error.message};

  }
};

const developerExists = async (user_name) => {
  const result = await findDeveloper(user_name);
  if (result === null) {

    return false;

  }

  return true;

};

const findDeveloper = async (user_name) => {

  return await DEVELOPER.findOne({
    where: {user_name: user_name},
  });
  
};

const loginDeveloper = async (developerData) => {
  const exist = await developerExists(developerData.user_name);
  if (!exist) {

    return {ok: false, message: `developer @${developerData.user_name} not exists`};

  }
  const developerModel = await findDeveloper(developerData.user_name);
  const result = await bcrypt.compare(developerData.password, developerModel.password);
  if (!result) {

    return {ok: false, message: 'Wrong password'};

  }

  return {ok: true, message: 'logged'};

}

const addAppToDeveloper = async (user_name, app_instance) => {
  try {
    const exist = await developerExists(user_name);
    if (!exist) {

      return {ok: false, message: 'developer not exists'};

    }
    const developer = await findDeveloper(user_name);
    await developer.addAPP(app_instance);

    return {ok: true, message: 'app added to developer'};

  } catch (error) {

    return {ok: false, message: error.message};

  }
}

module.exports = {
  createDeveloper,
  developerExists,
  findDeveloper,
  loginDeveloper,
  addAppToDeveloper,
}