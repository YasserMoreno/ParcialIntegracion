const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/auth');
const pagesRoutes = require('./routes/pages');

app.use('/auth', authRoutes); 
app.use('/', pagesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}. Proyecto: http://localhost:${PORT}`);
});
