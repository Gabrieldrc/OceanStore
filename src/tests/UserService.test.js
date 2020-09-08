const Userservice = require('../services/UserService');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
});

let uservice, userData;

test('if it connect', async () => {
  
  expect(connection.connect()).toBeTruthy();
});

// beforeAll(() => {
//   createConnection();
//   uservice = new Userservice(connection);
// });

// describe('matching cities to foods', () => {
//   beforeEach(() => {
//     userData = {
//       user_name: 'mrbing',
//       last_name: 'bing',
//       first_name: 'pepe',
//       password: '123',
//       type_user: 'client',
//     };
//   });

//   afterEach(() => {
//     connection.query('DELETE FROM Users;', function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is: ', results[0].solution);
//     });
//   });

//   test('newUser function exist', () => {
//     expect(uservice.newUser(userData)).toBeDefined();
//   });

// });