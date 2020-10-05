const axios = require('axios');

const API_URL = '/server/';

// let token;
const AuthService = {

  signup(formData) {
    return axios.post(API_URL+'users/signup', formData);
  },

  signin(formData) {
    return axios.post(API_URL+'users/signin', formData)
      .then(response => {
        if (response.data.accessToken) {
          window.localStorage.setItem('user', JSON.stringify(response.data));
          // token = JSON.stringify(response.data);
        }
        return response.data;
      });
  },
  
  logout(){
    return axios.get(API_URL+'users/logout')
      .then(response => {
        window.localStorage.removeItem('user')
        return true;
      })
  },
  
  getCurrentUser() {
    const token = window.localStorage.getItem('user');
    console.log(token);
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
  }
}


export default AuthService;