# **Ocean Store**
Is an Store Web API where you can sign up, sign in, explore and "buy" apps

## Requirements:
- npm
- nodejs

### Run the server and client (**IMPORTANT** install first all the dependencies before run this app)
npm run start

### important commands (**only works in the main folder**)
``` bash
# 1- Install concurrently dependency **very important to run both client and server at the same time**
npm install
# 2- Install dependencies for server
npm run iserver
# 3- Install dependencies for client
npm run iclient
# Run the Express server only
npm run server
# Run the React client only
npm run client

# Server runs on http://localhost:3001 and client on http://localhost:3000
```

## Libraries used
### Front-end (CLient)
- React APP
- axios (to fetch data)
- react-router-dom
- @reduxjs/toolkit
- react-redux

### Back-end (Server)
- accesscontrol
- bcrypt
- body-parser
- cors
- express
- express-mysql-session
- express-session
- jest
- jsonwebtoken
- morgan
- multer
- mysql2
- sequelize

### Data base diagram
![The DB Diagram](/images/db.diagram.svg)


### Run the server xampp mysql
cd /opt/lampp && sudo ./manager-linux-x64.run

### Xampp listening on port 82
