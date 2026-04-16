import { pool } from '../db/connection.js';

export const getContactos = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM contactos');
  res.json(rows);
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
  const { nombre, telefono, email } = req.body;

  const [result] = await pool.query(
    'INSERT INTO contactos(nombre, telefono, email) VALUES (?, ?, ?)',
    [nombre, telefono, email]
  );

  res.json({ id: result.insertId, nombre, telefono, email });
};

export const updateContacto = async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, email } = req.body;

  await pool.query(
    'UPDATE contactos SET nombre=?, telefono=?, email=? WHERE id=?',
    [nombre, telefono, email, id]
  );

  res.sendStatus(204);
};

export const deleteContacto = async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM contactos WHERE id=?', [id]);

  res.sendStatus(204);
};