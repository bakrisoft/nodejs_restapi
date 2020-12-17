const mysql = require('mysql');

mysqlConf = {
    dbHost: 'localhost',
    dbName: 'restapi',
    dbUser: 'restuser',
    dbPass: 'Re$tPasS1'
};

//local mysql db connection
var db = mysql.createConnection({
    host     : mysqlConf.dbHost,
    database : mysqlConf.dbName,
    user     : mysqlConf.dbUser,
    password : mysqlConf.dbPass
});

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;