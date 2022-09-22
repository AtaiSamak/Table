const Pool = require("pg").Pool;

const pool = new Pool({
    user: "welbex_user",
    host: "localhost",
    database: "welbex",
    password: "root",
    port: 5432,
});

module.exports = pool;
