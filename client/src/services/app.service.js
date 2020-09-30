const axios = require('axios');
const authHeader = require('./authHeader');

const API_URL = '/server/apps/';

const getAllApps = () => {
  return axios.get(API_URL + 'all');
};

const createNewApp = (formData) => {
  const authHeaderObject = authHeader();
  return axios.post(API_URL + 'new_app', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      ...authHeaderObject
    }
  });
};

export default {
  getAllApps,
  createNewApp,
};