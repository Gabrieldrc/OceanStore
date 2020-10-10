const axios = require('axios');

const API_URL = '/server/app/details/';

const getAppDetails = (app_name) => {
  return axios.get(API_URL + app_name);
};

export default {
  getAppDetails,
};