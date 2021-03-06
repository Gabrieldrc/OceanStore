const db = require('../models');
const User = db.users;
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  try {
    const exist = await userExists(userData.user_name);
    if (exist) {
  
      return {ok: false, message: `user @${userData.user_name} already exists`};
  
    }
  
    return bcrypt.hash(userData.password, 10)
    .then(async (hash) => {
      const user = await User.create({
        user_name: userData.user_name,
        password: hash,
      })

      return {ok: true, message: `user @${user.user_name} created`};

    })
  } catch (error) {

    return {ok: false, message: error.message};

  }
};

const userExists = async (user_name) => {
  const result = await findUser(user_name);
  if (result === null) {

    return false;

  }

  return true;

};

const findUser = async (user_name) => {

  return await User.findOne({
    where: {user_name: user_name},
  });
  
};

const loginUser = async (userData) => {
  const exist = await userExists(userData.user_name);
  if (!exist) {

    return {ok: false, message: `user @${userData.user_name} not exists`};

  }
  const userModel = await findUser(userData.user_name);
  const result = await bcrypt.compare(userData.password, userModel.password);
  if (!result) {

    return {ok: false, message: 'Wrong password'};

  }

  return {ok: true, message: 'logged'};

}

const addAppToUser = async (user_name, app_instance) => {
  try {
    const exist = await userExists(user_name);
    if (!exist) {

      return {ok: false, message: 'user not exists'};

    }
    const user = await findUser(user_name);
    await user.addAPP(app_instance);

    return {ok: true, message: 'app added to user'};

  } catch (error) {

    return {ok: false, message: error.message};

  }
}

module.exports = {
  createUser,
  userExists,
  findUser,
  loginUser,
  addAppToUser,
}