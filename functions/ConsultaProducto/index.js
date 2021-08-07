module.exports = async function (context, req) {
    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection({
        host: "chatbootdb.mysql.database.azure.com",
        user: "administrador@chatbootdb",
        port: "3306",
        password: "Admin123",
        database: "pedidos",
    });
    const [rows, fields] = await connection.execute('SELECT * FROM producto WHERE codigo_producto = ?',[req.body.codigo]);
    context.log('JavaScript HTTP trigger function processed a request.');
    
    context.res = {
        body: rows.length > 0 ? rows[0] : "informacion no encontrada"

    };
}
