const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth.routes');
const alunoRoutes = require('./routes/aluno.routes');

app.use('/auth', authRoutes);
app.use('/alunos', alunoRoutes);

// Conectar Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 API rodando em http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));
