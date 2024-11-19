var mysql = require('mysql2');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "your_password_here",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect