const axios = require('axios');

const API_URL = '/server/';

let token;
const AuthService = {

  signup(formData) {
    return axios.post(API_URL+'users/signup', formData);
  },

  signin(formData) {
    return axios.post(API_URL+'users/signin', formData)
      .then(response => {
        if (response.data.accessToken) {
          // localStorage.setItem('user', JSON.stringify(response.data));
          token = JSON.stringify(response.data);
          window.setTimeout(() => token = '', 24 * 60 * 60 * 1000);
        }
        return response.data;
      });
  },
  
  logout(){
    // localStorage.removeItem('user');
    token = "";
  },
  
  getCurrentUser() {
    console.log(token);
    // return JSON.parse(localStorage.getItem('user'));
    if (token) {
      return JSON.parse(token);
    }
    return;
  },

  authHeader() {
    const user = JSON.parse(token);
  
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    }
    return {};
  }
}


export default AuthService;