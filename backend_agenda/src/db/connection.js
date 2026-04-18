import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// const dbUrl = new URL(process.env.MYSQL_URL);
// console.log("MYSQL_URL:", process.env.MYSQL_URL);
// const pool = mysql.createPool({
//   host: dbUrl.hostname,
//   user: dbUrl.username,
//   password: dbUrl.password,
//   database: dbUrl.pathname.replace('/', ''),
//   port: dbUrl.port,
//   waitForConnections: true,
//   connectionLimit: 10,
// });

console.log("SIN DB TEST");
//export default pool;