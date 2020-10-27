const axios = require('axios');

const API_URL = '/server/';

const DevService = {

  signup(formData) {
    return axios.post(API_URL+'developers/signup', formData);
  },

  signin(formData) {
    return axios.post(API_URL+'developers/signin', formData)
      .then(response => {
        if (response.data.accessToken) {
          window.localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  },
  
  logout(){
    return axios.get(API_URL+'logout')
      .then(response => {
        window.localStorage.removeItem('user')
        return true;
      })
  },
  
  getCurrentUser() {
    const token = window.localStorage.getItem('user');
    if (token) {
      return JSON.parse(token);
    }
    return;
  },

  authHeader() {
    const user = this.getCurrentUser();
  
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    }
    return {};
  },

  auth() {
    const token = this.getCurrentUser();
    if (typeof token === 'object') {
      if (token.role === 'developer') {

        return true;
      }
    }
    return false;
  },
}


export default DevService;