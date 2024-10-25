const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin123', 8), 
  }
];

function generateSecretKey(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let secretKey = '';
  for (let i = 0; i < length; i++) {
    secretKey += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return secretKey;
}

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  let secretKey = generateSecretKey(32);

  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

  res.json({ auth: true, token });
});

module.exports = router; 