const express = require('express');
const router = require('./src/config/router');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require("./src/models");
const session = require('./src/config/session.config');
const publicAuth = require('./src/middleware/publicAuth');
const app = express();

global.__basedir = __dirname;


try {
  
  app.set("port", process.env.PORT || 3001);

  // for parsing application/json
  app.use(bodyParser.json());
  app.use(morgan('tiny'));
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // for start a session
  app.use(session);

  app.use(publicAuth.middleware);

  // Express only serves static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.use('/server', router);  

  db.sequelize.sync();
  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });
  app.listen(app.get("port"), () => {
    console.log(`Listening at: localhost:${app.get("port")}/server/`);
  });
  
} catch (error) {
  console.log('\n\n');
  console.log('ERROR::::'); 
  console.log(error); 
  console.log('\n\n');
}