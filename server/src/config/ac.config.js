const AccessControl = require('accesscontrol');

let grantsObject = {
  user: {
    user: {
      'read:own': ['*'],
      'update:own': ['*'],
      'delete:own': ['*'],
    },
    app: {
      'create:own': ['*'],
      'read:any': ['*'],
      'update:own': ['*'],
      'delete:own': ['*'],
    }
  },
  guest: {
    user: {
      'create:any': ['*'],
    },
    app: {
      'read:any': ['*'],
    }
  }
};

const ac = new AccessControl(grantsObject);

module.exports = ac;