const mysql = require("mysql2/promise");

module.exports = () => {
    return await mysql.createConnection({
        host: "chatbootdb.mysql.database.azure.com",
        user: "administrador@chatbootdb",
        port: "3306",
        password: "Admin123",
        database: "pedidos",
    });
};