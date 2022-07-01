const Pool = require("pg").Pool;

const pool = new Pool({
    user: "socialnetworkadmin",
    host: "localhost",
    database: "test_db",
    password: "root",
    port: 5432,
});

module.exports = pool;
