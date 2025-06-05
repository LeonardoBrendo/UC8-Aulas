const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  aluno: String,
  curso: String,
  semestre: Number,
  instituicao: String,
  media: Number
});

module.exports = mongoose.model('Aluno', alunoSchema);
