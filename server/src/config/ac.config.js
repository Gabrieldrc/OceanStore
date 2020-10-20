const AccessControl = require('accesscontrol');

let grantsObject = {
  user: {
    user: {
      'read:own': ['*'],
      'update:own': ['*'],
      'delete:own': ['*'],
    },
    app: {
      'read:any': ['*'],
    },
    session: {
      'delete:own': ['*'],
    },
  },
  developer: {
    developer: {
      'read:own': ['*'],
      'update:own': ['*'],
      'delete:own': ['*'],
    },
    app: {
      'create:own': ['*'],
      'read:own': ['*'],
      'update:own': ['*'],
      'delete:own': ['*'],
    },
    session: {
      'delete:own': ['*'],
    },
  },
  guest: {
    user: {
      'create:any': ['*'],
    },
    app: {
      'read:any': ['*'],
    },
    session: {
      'create:own': ['*'],
    },
  }
};

const ac = new AccessControl(grantsObject);

module.exports = ac;