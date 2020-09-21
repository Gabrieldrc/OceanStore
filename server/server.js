const express = require('express');
const router = require('./src/config/router');
const bodyParser = require('body-parser');
const db = require("./src/models");
const upload = require("./src/middleware/upload")

global.__basedir = __dirname;

const app = express();

try {
  
  app.set("port", process.env.PORT || 3001);
  
  // for parsing application/json
  app.use(bodyParser.json());
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(upload.single('image'));
  // for parsing multipart/form-data
  // app.use(upload.array());

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
  console.log('ERROR::::'+error); 
  console.log('\n\n');
}