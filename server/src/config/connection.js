const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'playstoredb'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('It\'s connected');
});

const userTablePlaystoredb = 'CREATE TABLE IF NOT EXISTS Users ('
  +'user_name varchar(255) PRIMARY KEY NOT NULL,'
  +'password varchar(255) NOT NULL'
  +');'
;

connection.query(userTablePlaystoredb, (error, results, fields) => {
  if (error) {
    console.error(error);
    return;
  } else {
    console.log('TABLE playstoredb Users:',results);
  }
});

module.exports = connection;

