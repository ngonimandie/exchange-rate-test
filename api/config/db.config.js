'user strict';

const mysql = require('mysql');
require('dotenv').config();
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : process.env.CC_DB_HOST,
  user     : process.env.CC_DB_USER,
  password : process.env.CC_DB_PASSWORD,
  database : process.env.CC_DB
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;