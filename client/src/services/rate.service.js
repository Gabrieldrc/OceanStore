const axios = require('axios');

const API_URL = '/server/app/rates/';

const getAppRates = (app_name) => {
  return axios.get(API_URL + 'count/' + app_name);
};

export default {
  getAppRates,
};