const User = require('../models/User');
const UserError = require('../models/UserError');
const connection = require('../config/connection');
const bcrypt = require('bcrypt');

class UserService {
  
  _connection;

  //Recieve a connection to be abel to do the queries
  constructor(connection) {
    this._connection = connection;
  }

  //ADD a new USER to the Users table
  //Recieve an instance of an user
  //RETURNS a promise
  newUser(userModel) {
    //create an userError instance if something goes wrong
    const userError = new UserError();
    
    //Send the username to the findUser function that returns a promise
    const resultPromise = this.findUser(userModel.getUserName());
    return resultPromise.then(result => {

      //check if the result array is not empty
      if (result.length > 0) {
        //if is not, returns a userError instance, because the user already exist
        userError.setMessage('the user_name already exists');
        return userError;
      };

      //if is empty the result array...
      //With bcript we encrypt the password and @hash is the new value that
      // it's gonna be save in the DB
      return bcrypt.hash(userModel.getPassword(), 10)
      .then(hash => {
        const query = 'INSERT INTO Users (user_name, password )'
        +' VALUES (?,?);';
        let variables = [
          userModel.getUserName(),
          hash,
        ];
        //create a promise and with the connection, make a request to the database
        // to insert the user data into the Users table
        this._connection.query(query,variables,(error, results, fields) => {
          if (error) {
            console.error('\n\nERROR (insert user)\n\n');
            throw error;
          }
          return true;
        });
      })
      .then(() => {
        //if everything is ok return the same user instance it recieve
        // with the ok true and the message
        userModel.setOk(true);
        userModel.setMessage(`User @${userModel.getUserName()} created!`);
        return userModel;
      })
      .catch(error => {
        throw error;
      });
    });

  }

  //Recieve an username
  findUser(user_name) {
    const query = `SELECT * FROM Users WHERE user_name = '${user_name}'`;

    //create a promise
    return new Promise ((resolve,reject) => {
      //with the connection, make a request to the database to find a user with the username it recieved
      this._connection.query(query,(error, results, fields) => {
        if (error) {
          console.error('\n\nERROR!!\n\n');
          return reject(error);
        }
        //returns an array with users object
        return resolve(results);
      });
    });
  }

  //Check if the userModel it recieve,
  // has the same data of the database
  //RETURNS a promise
  login(userModel) {
    //create an userError instance if something goes wrong
    const userError = new UserError();
    
    //Send the username to the findUser function that returns a promise
    const resultPromise = this.findUser(userModel.getUserName());
    return resultPromise.then(result => {

      //check if the result array is not empty
      if (result.length === 0) {
        //if it is, returns a userError instance, because the user not exist
        userError.setMessage('the user_name not exists');
        return userError;
      };

      const userData = {
        user_name: result[0]['user_name'],
        password: result[0]['password'],
      };
      //with bcrypt compare if the password encrypted and the password recieve in userModel are the same
      return bcrypt.compare(userModel.getPassword(), userData.password).then(function(result) {
        if (result) {
          //if everything is ok return the same user instance it recieve
          // with the ok true and the message
          userModel.setOk(true);
          userModel.setMessage(`User @${userModel.getUserName()} is logged!`);
          return userModel;
        }
        //Otherwise, return an userError instance with a message
        userError.setMessage('the password is wrong');
        return userError;
      });
  
    });
  }

}

const userService = new UserService(connection);

module.exports = userService; 