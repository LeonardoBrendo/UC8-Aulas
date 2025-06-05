const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String
});

usuarioSchema.pre('save', async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

module.exports = mongoose.model('Usuario', usuarioSchema);
