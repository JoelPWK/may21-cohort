var mysql = require('mysql');
//import mysql from "mysql";

export default class dbClient {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "stopstopgo",
    });
  }

  handleError(err) {
    throw err;
  }

  query(sqlQuery, callback) {
    this.connection.connect((err) => {
      if (err) this.handleError(err);
      this.connection.query(sqlQuery, function (err, result) {
        if (err) this.handleError(err);
        callback(result);
      });
    });
  }
}
