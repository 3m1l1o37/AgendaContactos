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
//.get para el detalle de los contactos
app.get('/api/contactos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM contactos WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});