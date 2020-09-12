const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crowd_funding'
});

// Connect 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

module.exports = db;