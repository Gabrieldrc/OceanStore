const express = require('express');
const app = express();
const router = require('./src/config/router');
try {
  
  app.set("port", process.env.PORT || 3001);
  
  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  
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