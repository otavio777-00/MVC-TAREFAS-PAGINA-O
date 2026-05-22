const mysql = require("mysql2");

const pool = mysql.createPool(
    {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "lista-tarefas",
        port: process.env.DB_PORT || 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit:0
    }
);

pool.getConnection((err, conn) =>{
    if(err)
        console.log(err);
    else
        console.log("Conectado ao SGBD!");
});


module.exports = pool.promise()