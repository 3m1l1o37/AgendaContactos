import express from 'express';
import cors from 'cors';
import contactosRoutes from './routes/contactos.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactosRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});