const mySql = require('mysql');

const connection = mySql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'e-app_db'
  });

  module.exports = connection;