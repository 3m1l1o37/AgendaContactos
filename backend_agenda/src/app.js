import express from 'express';
import cors from 'cors';
import contactosRoutes from './routes/contactos.routes.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://agendacontactose.netlify.app'
  ]
}));

app.use(express.json());

app.use('/api', contactosRoutes);

app.get('/ping', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
console.log("PORT REAL:", process.env.PORT);
app.listen(PORT,  () => {
  console.log("PORT REAL:", process.env.PORT);
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
