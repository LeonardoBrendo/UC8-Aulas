const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
});

router.get('/:nome', auth, async (req, res) => {
  const aluno = await Aluno.findOne({ aluno: req.params.nome });
  aluno ? res.json(aluno) : res.status(404).json({ erro: 'Aluno não encontrado' });
});

router.post('/', auth, async (req, res) => {
  const novoAluno = await Aluno.create(req.body);
  res.status(201).json(novoAluno);
});

router.put('/:id', auth, async (req, res) => {
  const atualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  atualizado ? res.json(atualizado) : res.status(404).json({ erro: 'Aluno não encontrado' });
});

router.delete('/:id', auth, async (req, res) => {
  const apagado = await Aluno.findByIdAndDelete(req.params.id);
  apagado ? res.json({ mensagem: 'Aluno deletado' }) : res.status(404).json({ erro: 'Aluno não encontrado' });
});

module.exports = router;
