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
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('It\'s connected to TEST');
  });
  
  const userTablePlaystoredb = 'CREATE TABLE IF NOT EXISTS Users ('
    +'user_name varchar(255) PRIMARY KEY NOT NULL,'
    +'password varchar(255) NOT NULL'
    +');'
  ;
  
  await connection.query(userTablePlaystoredb, (error, results, fields) => {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log('TABLE playstoredb Users:',results);
    }
  });

  return connection;
}




module.exports = createConnectionEnviroment;

