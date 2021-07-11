const mysql = require("mysql");
const Promise = require("bluebird");
require("dotenv").config();
//console.log(process.env.DB_USER);

let connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: "row_fruit_db",
});

connection = Promise.promisifyAll(connection);

module.exports = connection;


// const connection = require("./utils/db");
// connection.connectAsync