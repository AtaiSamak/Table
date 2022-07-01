const pool = require("../db");

class TableController {
    async getData(req, res) {
        await pool.query("SELECT * FROM test_data").then((table) => {
            res.send(table.rows);
        });
    }
}

module.exports = new TableController();
