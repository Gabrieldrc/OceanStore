const axios = require('axios');

const API_URL = '/server/';

const signup = (formData) => {
  return axios.post(API_URL+'users/signup', formData);
};

const signin = (formData) => {
  return axios.post(API_URL+'users/signin', formData)
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  signup,
  signin,
  logout,
  getCurrentUser,
};