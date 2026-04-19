import pool from '../db/connection.js';

export const getContactos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contactos');
    res.json(rows);
  } catch (error) {
    console.error('Error getContactos:', error);
    res.status(500).json({ error: 'Error al obtener contactos' });
  }
};

export const getContacto = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(
    'SELECT * FROM contactos WHERE id = ?',
    [id]
  );
  res.json(rows[0]);
};

export const createContacto = async (req, res) => {
  try {
    const { nombre, telefono, email, pais } = req.body;
    const [result] = await pool.query(
      'INSERT INTO contactos(nombre, telefono, email, pais) VALUES (?, ?, ?, ?)',
      [nombre, telefono, email, pais]
    );
    res.json({ id: result.insertId, nombre, telefono, email, pais });
  } catch (error) {
    console.error('Error createContacto:', error);
    res.status(500).json({ error: 'Error al crear contacto' });
  }
};

export const updateContacto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, telefono, email, pais } = req.body;
    await pool.query(
      'UPDATE contactos SET nombre=?, telefono=?, email=?, pais=? WHERE id=?',
      [nombre, telefono, email, pais, id]
    );
    res.sendStatus(204);
  } catch (error) {
    console.error('Error updateContacto:', error);
    res.status(500).json({ error: 'Error al actualizar contacto' });
  }
};

export const deleteContacto = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM contactos WHERE id=?', [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleteContacto:', error);
    res.status(500).json({ error: 'Error al eliminar contacto' });
  }
};
