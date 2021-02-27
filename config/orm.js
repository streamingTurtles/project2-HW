// Import the mySQL connection to the db so that the ORM can manipulate data in the
// database using an object-oriented paradigm 
const connection = require('./connection.js');



// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arr = [];  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }  
    return arr.toString();
  };  
  // Helper function to convert object key/value pairs to SQL syntax
  const objToSql = (ob) => {
    const arr = [];  
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (double cheesburger => 'double cheesburger)
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // i.e {name: 'double cheesburger'} => ["name='double cheesburger'"]
        // i.e {devoured: true} => ["devoured=true"]
        arr.push(`${key}=${value}`);
      }
    }  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
  };




// build out the object represenation database query functionality in javascript 
// so that now when you want to work on 
// some data from the db, you can just call a function that will mimic SQL db commands.
// i.e. - you don't have to write out SQL commands now.
//
// Object for all our SQL statement functions.
const orm = {
    // javascript get everything from a table, put in result
    selectAll(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // javascript mimic to create a table and input some data
    create(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table}`;
  
      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += ') ';
  
      console.log(queryString);
  
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // js mimic of updating a table in the db
    // An example of objColVals would be {name: quarterPounder, devoured: true}
    update(table, objColVals, condition, cb) {
      let queryString = `UPDATE ${table}`;
  
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // js mimic of a sql query to delete an item from a table
    delete(table, condition, cb) {
      let queryString = `DELETE FROM ${table}`;
      queryString += ' WHERE ';
      queryString += condition;
  
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
};




// Exporting the ORM object to use in the model file: burgerController.js
// Note: in burgerController.js - is where we use express to navigate our routing
module.exports = orm;

