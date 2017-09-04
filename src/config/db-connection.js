var CONFIG = require('./config');
var mysql = require('mysql');

var pool = mysql.createPool({
    host: CONFIG.dbServer,
    port: CONFIG.dbPort,
    user: CONFIG.dbUser,
    password: CONFIG.dbPassword,
    database: CONFIG.dbUseSchema
});

/**
 * DB 커넥션, DB 정보
 */
module.exports = {
    connectionPool: pool
};
