const connection = require('../config/connection');
const User = require('../models/User');
const UserError = require('../models/UserError');

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
      const query = 'INSERT INTO Users (user_name, password )'
        +' VALUES (?,?);';
      const variables = [
        userModel.getUserName(),
        userModel.getPassword(),
      ];
      
      //create a promise and with the connection, make a request to the database
      // to insert the user data into the Users table
      const returned = new Promise ((resolve,reject) => {
        this._connection.query(query,variables,(error, results, fields) => {
          if (error) {
            console.error('\n\nERROR (insert user)\n\n');
            return reject(error);
          }
          return resolve();
        });
      })
      .catch(error => {
        throw error;
      });

      //if everything is ok return the same user instance it recieve
      // with the ok true and the message
      return returned.then(result => {
        userModel.setOk(true);
        userModel.setMessage(`User ${userModel.getUserName()} created!`);
        return userModel;
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
}

const userService = new UserService(connection);

module.exports = userService; 