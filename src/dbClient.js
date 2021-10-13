var mysql = require('mysql2/promise');
//import mysql from "mysql";

export default class dbClient {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1689@nDr3",
      database: "stopstopgo",
    });
  }

//   handleError(err) {
//     throw err;
//   }

//   query(sqlQuery, callback) {
//     this.connection.connect((err) => {
//       if (err) this.handleError(err);
//       this.connection.query(sqlQuery, function (err, result) {
//         if (err) this.handleError(err);
//         callback(result);
//       });
//     });
//   }

    async query(sql, params) {
        const [results, ] = await this.connection.execute(sql, params);
    
        return results;
    }
}