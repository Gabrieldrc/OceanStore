const acl = require('express-acl');

const configObject = {
  filename: 'acl.json',
  path: 'src/config',
  baseUrl: 'server/'
};
 
const responseObject = {
  status: 'Access Denied',
  message: 'You are not authorized to access this resource'
};

acl.config(configObject,responseObject);

module.exports = acl;