import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = new URL(process.env.DATABASE_URL);

const pool = mysql.createPool({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.replace('/', ''),
  port: dbUrl.port,
  waitForConnections: true,
  connectionLimit: 10,
});
export default pool;