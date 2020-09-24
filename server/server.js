const 
  express = require('express'),
  router = require('./src/config/router'),
  bodyParser = require('body-parser'),
  db = require("./src/models"),
  upload = require("./src/middleware/upload"),
  session = require('./src/config/session.config'),
  app = express();

global.__basedir = __dirname;


try {
  
  app.set("port", process.env.PORT || 3001);

  // for parsing application/json
  app.use(bodyParser.json());
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(upload.single('image'));
  // for parsing multipart/form-data
  // app.use(upload.array());

  // for start a session
  app.use(session);

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