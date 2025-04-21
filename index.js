const express = require('express');
const app = express();
require('dotenv').config();

const profissionalRoutes = require('./routes/profissional');

app.use(express.json());
app.use('/profissionais', profissionalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});