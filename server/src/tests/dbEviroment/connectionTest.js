const mysql = require('mysql');

const createConnectionEnviroment = async () => {
  const connection = await mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'test'
  });
  
  await connection.connect(err => {
    if (err) {
      return error;
    }
  });
  
  const userTablePlaystoredb = 'CREATE TABLE IF NOT EXISTS Users ('
    +'user_name varchar(255) PRIMARY KEY NOT NULL,'
    +'password varchar(255) NOT NULL'
    +');'
  ;
  
  await connection.query(userTablePlaystoredb, (error, results, fields) => {
    if (error) {
      return error;
    }
  });

  return connection;
}




module.exports = createConnectionEnviroment;

