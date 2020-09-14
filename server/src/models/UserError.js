const User = require('./User');

class UserError extends User{

  constructor() {
    super('ERROR', 'ERROR');
    this.setOk(false);
  }
  
}

module.exports = UserError;