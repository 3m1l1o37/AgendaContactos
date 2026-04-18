import  pool  from '../db/connection.js';

export const getContactos = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM contactos');
  res.json(rows);
};

export const getContacto = async (req, res) => {
  // const { id } = req.params;
  // const [rows] = await pool.query(
  //   'SELECT * FROM contactos WHERE id = ?',
  //   [id]
  // );
  // res.json(rows[0]);
  res.json([{ ok: true }]);
};

export const createContacto = async (req, res) => {
  const { nombre, telefono, email, pais } = req.body;

  const [result] = await pool.query(
    'INSERT INTO contactos(nombre, telefono, email, pais) VALUES (?, ?, ?, ?)',
    [nombre, telefono, email, pais]
  );

  res.json({ id: result.insertId, nombre, telefono, email, pais });
};

export const updateContacto = async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, email, pais } = req.body;

  await pool.query(
    'UPDATE contactos SET nombre=?, telefono=?, email=?, pais=? WHERE id=?',
    [nombre, telefono, email, pais, id]
  );

  res.sendStatus(204);
};

export const deleteContacto = async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM contactos WHERE id=?', [id]);

  res.sendStatus(204);
};
