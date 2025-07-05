//this is where we write the code for the connection to ensure we are connected to the database 

const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host: 'local host',
        user: 'PROJECT',
        password: 'jesusme..',
        database: 'vanced',
        waitForConnections: true,
        connectionLimit: 10,//this is the maximum number of user connections to the db at once
        queueLimit: 0 //this is how many ques can be formed when connecting 
    }
);

module.exports = pool;//we are exporting the function connecting to the sql database 













