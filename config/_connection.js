// // db connection settings for localhost
// const inquirer = require("inquirer");
// const mysql = require("mysql");
// const appName = require("asciiart-logo");
// require("console.table");
// const dotenv = require("dotenv").config();

// // comment out - have to update for now using JawsDB on Heroku - see directly below the new connection
// // const connection = mysql.createConnection({
// //     host: 'localhost',
// //     port: 3306,
// //     // user: 'root',
// //     // password: 'xxx',
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASSWORD,
// //     database: 'burgers_db'
// // });

// // adding Jawsdb on Heroku
// let connection;
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     // user: 'root',
//     // password: 'xxx',
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    database: "burgers_db",
//   });
// }

// // check the db connection
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("You connected to the db as id " + connection.threadId); // random id generated when successful connection with the db
// });

// // Diplays Title of the application in the console - I use this to test and conpare what is also displayed in the browser - use as a confidence reference
// function init() {
//   const appTitle = appName({ name: "Project 2" }).render();
//   console.log(appTitle);
// }
// init();

// // Export the connection.js file for our ORM (Object-relational mapping) to use.
// // The orm.js then exports its functionality (js code that lets you query and manipulate data
// // from a database using an object-oriented paradigm) so we can use in our controller to run CRUD methods.
// // Note: as this file structure has been laid out and the code built within that structure, it is important
// // to realize that testing the db connection intially had to be done while in the root of the project folder to
// // so that the connection.connect function has access to the node_modules.  When we put the connections.js file
// // into the config folder, its now accessed through the modules.exports node functionality and ultimately the
// // ORM relies on being required into the controller file.  In our case, that file is the
// // burgerCntroller.js file.
// module.exports = connection;
