import express from 'express';
import cors from 'cors';
import contactosRoutes from './routes/contactos.routes.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactosRoutes);

// 🚨 PUERTO DINÁMICO (CLAVE)
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

