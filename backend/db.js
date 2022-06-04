const Pool = require('pg').Pool;



const pool = new Pool({
    user: "postgres",
    password: "apple1010",
    database: "northstardb",
    host: "localhost",
    port: 5432
});

module.exports = pool;