// const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

// var mysql = require("mysql");

// var con = mysql.createConnection({
//     host: DB_HOST,
//     user: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: DB_NAME
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log(DB_NAME + 'Database connection success');
// });

require('dotenv').config();

const mysql = require('mysql');

// Debug log to verify environment variables
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_USERNAME:', process.env.DB_USERNAME);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_NAME:', process.env.DB_NAME);

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ums"
});

con.connect(function(err) {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log(DB_NAME + ' Database connection success');
});

module.exports=con;