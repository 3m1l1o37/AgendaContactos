import express from 'express';
import cors from 'cors';
import contactosRoutes from './routes/contactos.routes.js';
console.log("DATABASE_URL:", process.env.DATABASE_URL);
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactosRoutes);

// 🚨 PUERTO DINÁMICO (CLAVE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});