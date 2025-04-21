const service = require('../services/profissionalService');

const getAll = async (req, res, next) => {
  try {
    const profissionais = await service.getAll();
    res.json(profissionais);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const profissional = await service.getById(req.params.matricula);
    if (!profissional) return res.status(404).json({ error: 'Profissional não encontrado' });
    res.json(profissional);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const novo = await service.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const atualizado = await service.update(req.params.matricula, req.body);
    if (!atualizado) return res.status(404).json({ error: 'Profissional não encontrado' });
    res.json(atualizado);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const deletado = await service.remove(req.params.matricula);
    if (!deletado) return res.status(404).json({ error: 'Profissional não encontrado' });
    res.json({ message: 'Profissional deletado com sucesso' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, create, update, remove };
