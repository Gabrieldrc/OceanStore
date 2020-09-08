const User = require('../models/User');

class UserError extends User{

  constructor() {
    super('ERROR', 'ERROR');
    this.setOk(false);
  }
  
}

module.exports = UserError;