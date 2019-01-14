//create a database connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'solothurn94', 
    database: 'MyDatabase',
    multipleStatements: true
});
connection.connect(err => {
    if (err) {
        return err;
    }
});

module.exports.connection = connection;
