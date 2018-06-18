const MYSQL = require('mysql');
const CONN = MYSQL.createConnection({
    host:'localhost',
    port:3307,
    user:'root',
    password: '',
    database:'conexionbd'
})

module.exports = CONN;