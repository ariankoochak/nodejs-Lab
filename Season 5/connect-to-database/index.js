const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port : 3306,
  password: "******",
  database: "datas",
});

connection.connect();

connection.query("SELECT * from users", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

connection.end();
