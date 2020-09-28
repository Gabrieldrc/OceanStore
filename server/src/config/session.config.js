const 
  dbConfig = require('./db.config'),
  session = require('express-session'),
  MySQLStore = require('express-mysql-session')(session);

const options = {
  host: dbConfig.HOST,
  port: 3306,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
};

const sessionStore = new MySQLStore(options);

module.exports = session({
  secret: 'super_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
});
  