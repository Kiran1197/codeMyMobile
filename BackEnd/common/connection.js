const mysql = require("mysql")
dbConnectionInfo = {

    host: "database-1.czzrddetw8jk.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "Kiran#123",
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    database: "codeMyMobile",
  };

  //create mysql connection pool
  var dbconnection = mysql.createPool(
    dbConnectionInfo
  );
  
  // Attempt to catch disconnects 
  dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');
  
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
  });
  
 const connection = dbconnection;
 module.exports=connection


