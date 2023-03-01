var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "Laurent159753",
  database: "users",
  insecureAuth: true,
  ssl: false,
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully..!!");
  }
});

module.exports = connection;
