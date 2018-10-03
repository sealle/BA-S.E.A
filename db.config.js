//DB connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'solothurn94',
    database: 'MyDatabase'
});
connection.connect(err => {
    if (err) {
        return err;
    }
});

module.exports.connection = connection;
