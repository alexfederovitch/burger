let connection = require("../config/connection.js");

let orm = {
    all: function(tableInput, cb) {
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    update: function(tableInput, condition, cb) {
        let queryString = "UPDATE " + tableInput;
    
        queryString += " SET devoured=true";
        queryString += " WHERE id=";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          
          cb(result);
        });
      }
};



module.exports = orm;