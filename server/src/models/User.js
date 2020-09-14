
class User {

  _ok = false;
  _user_name = '';
  _password = '';
  _message = '';

  constructor(user_name = '', password = '') {
    this._user_name = user_name;
    this._password = password;
  }

  setUserName(user_name) {
    this._user_name = user_name;
  }

  setPassword(password) {
    this._password = password;
  }
  
  setMessage(message) {
    this._message = message;
  }

  setOk(bool = false) {
    this._ok = bool;
  }

  getUserName() {
    return this._user_name;
  }

  getPassword() {
    return this._password;
  }

  message() {
    return this._message;
  }

  ok() {
    return this._ok;
  }

}

module.exports = User;