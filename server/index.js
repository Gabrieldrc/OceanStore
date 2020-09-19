const express = require('express');
const router = require('./src/config/router');
const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer({ dest: 'src/uploads/' });


const app = express();

try {
  
  app.set("port", process.env.PORT || 3001);
  
  // for parsing application/json
  app.use(bodyParser.json());
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // for parsing multipart/form-data
  // app.use(upload.array());

  // Express only serves static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.use('/server', router);  

  app.listen(app.get("port"), () => {
    console.log(`Listening at: localhost:${app.get("port")}/server/`);
  });
  
} catch (error) {
 console.log('ERROR::::'+error); 
}