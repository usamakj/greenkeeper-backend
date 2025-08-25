// Database se saare users ki information get karna
const findAllUsers = async () => {
  const [rows] = await pool.execute('SELECT id, name, email, role, is_active FROM `users`');
  return rows;
};

// Ek user ko uski ID se get karna
const findUserById = async (id) => {
  const [rows] = await pool.execute('SELECT id, name, email, role, is_active FROM `users` WHERE `id` = ?', [id]);
  return rows[0];
};

// Ek user ki details update karna
const updateUserById = async (id, { name, email, role, is_active }) => {
  const [result] = await pool.execute(
    'UPDATE `users` SET `name` = ?, `email` = ?, `role` = ?, `is_active` = ? WHERE `id` = ?',
    [name, email, role, is_active, id]
  );
  return result.affectedRows > 0;
};

// User ko soft delete karna (is_active = false set karna)
const softDeleteUserById = async (id) => {
  const [result] = await pool.execute('UPDATE `users` SET `is_active` = FALSE WHERE `id` = ?', [id]);
  return result.affectedRows > 0;
};

// --- Aapke exports ab is tarah dikhenge ---
module.exports = {
  findUserByEmail,
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  softDeleteUserById
};