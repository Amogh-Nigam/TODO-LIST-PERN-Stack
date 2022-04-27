const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "amoghnigam",
  password: "",
  port: 5432,
  database: "todolist"
});

module.exports = pool;
