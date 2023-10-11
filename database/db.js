const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'cargo_func',
    port: 3360
});




module.exports.connection = connection;