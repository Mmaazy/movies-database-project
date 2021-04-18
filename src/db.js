const mysql = require('mysql') ;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MuhammadMaaz1998',
    database : 'movie'
  });
  
  connection.connect((err) => {
    if(err) {
        throw(err)
    }

    console.log('Database connected');
  });

  module.exports = connection