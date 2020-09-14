const createConnectionEnviroment = require('./dbEviroment/connectionTest');
const Userservice = require('../services/UserService');
const User = require('../models/User');
const bcrypt = require('bcrypt');



describe('Testing the Userservice', () => {
  let connectionTest, userServiceTest;
  const user_name = 'pepe';
  const password = 'asd123';
  const user = new User(user_name, password);
  beforeAll(async () => {

    connectionTest = await createConnectionEnviroment();

    userServiceTest = new Userservice(connectionTest);
  });

  afterAll(async () => {
    await connectionTest.end();
  });

  describe('the \'createUser\' function', () => {

    afterEach(() => {
      connectionTest.query('DELETE FROM Users WHERE user_name = "pepe"', (error) => {
        if (error) {
          return error;
        }
      });
    });

    test('create a new User',() => {
      return userServiceTest.createUser(user)
      .then(userModel => {
        expect(userModel.ok()).toBeTruthy();
        expect(userModel.message()).toBe(`User @${user_name} created!`);
        return new Promise ((resolve,reject) => {
          connectionTest.query(`SELECT * FROM Users WHERE user_name = "${user_name}"`,(error, results, fields) => {
            if (error) {
              return reject(error);
            }
            return resolve(results);
          });
        })
        .then(results => {
          expect(results.length).toEqual(1);
          expect(results[0]['user_name']).toBe(user_name);
        });
      });
    });

    test('can\'t create a new User IF the user_name already exists',() => {
      return userServiceTest.createUser(user)
      .then(userModel => {
        expect(userModel.ok()).toBeTruthy();
        return userServiceTest.createUser(user)
        .then(userModel => {
          expect(userModel.ok()).toBeFalsy();
          expect(userModel.message()).toBe('the user_name already exists');
          return new Promise ((resolve,reject) => {
            connectionTest.query(`SELECT * FROM Users WHERE user_name = "${user_name}"`,(error, results, fields) => {
              if (error) {
                return reject(error);
              }
              return resolve(results);
            });
          })
          .then(results => {
            expect(results.length).toEqual(1);
          });
        });
      })
    });

  });

  describe('the \'login\' function', () => {

    beforeAll(() => {
      return bcrypt.hash(password, 10)
      .then(hash => {
        const query = `INSERT INTO Users (user_name, password ) VALUES ("${user_name}", "${hash}");`;
        connectionTest.query(query,(error, results, fields) => {
          if (error) {
            return error;
          }
        });
      })
    });

    afterAll(() => {
      connectionTest.query(`DELETE FROM Users WHERE user_name = "${user_name}"`, (error) => {
        if (error) {
          return error;
        }
      });
    });

    test('returns a userModel with the permission to acces if his data is the same as the database',() => {
      return userServiceTest.login(user)
      .then(userModel => {
        expect(userModel.ok()).toBeTruthy();
        expect(userModel.message()).toBe(`User @${user_name} is logged!`);
      });
    });

    test('returns a userModelError with NO permission to acces if his data is NOT the same as the database',() => {
      const otherUser = new User(user_name, '321dsa');
      return userServiceTest.login(otherUser)
      .then(userModel => {
        expect(userModel.ok()).toBeFalsy();
        expect(userModel.message()).toBe('the password is wrong');
      });
    });

    test('returns a userModelError with NO permission to acces if his data is NOT in the database',() => {
      const otherUser = new User('pepererepe', '321dsa');
      return userServiceTest.login(otherUser)
      .then(userModel => {
        expect(userModel.ok()).toBeFalsy();
        expect(userModel.message()).toBe('the user_name not exists');
      });
    });

  });

});