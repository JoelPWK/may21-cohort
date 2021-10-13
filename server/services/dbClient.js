const mysql = require('mysql2/promise');

async function query(sql) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stopstopgo",
  });
  const [results, ] = await connection.execute(sql.string, sql.params);

  return results;
}

module.exports = {
  query
}
