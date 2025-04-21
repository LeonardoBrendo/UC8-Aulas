const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', async (req, res) => {
  const { nome, profissao, salario, setor, cidade, estado } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO profissional (nome, profissao, salario, setor, cidade, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, profissao, salario, setor, cidade, estado]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM profissional');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get('/:matricula', async (req, res) => {
  const { matricula } = req.params;
  try {
    const result = await db.query('SELECT * FROM profissional WHERE matricula = $1', [matricula]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Profissional não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:matricula', async (req, res) => {
  const { matricula } = req.params;
  const { nome, profissao, salario, setor, cidade, estado } = req.body;
  try {
    const result = await db.query(
      'UPDATE profissional SET nome=$1, profissao=$2, salario=$3, setor=$4, cidade=$5, estado=$6 WHERE matricula=$7 RETURNING *',
      [nome, profissao, salario, setor, cidade, estado, matricula]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Profissional não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:matricula', async (req, res) => {
  const { matricula } = req.params;
  try {
    const result = await db.query('DELETE FROM profissional WHERE matricula = $1 RETURNING *', [matricula]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Profissional não encontrado' });
    }
    res.json({ message: 'Profissional deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;