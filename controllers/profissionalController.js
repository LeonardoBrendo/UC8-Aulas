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

const head = async (req, res) => {
  res.status(200).end(); // Apenas testa a existência do endpoint
};

const options = async (req, res) => {
  res.set('Allow', 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS,TRACE,CONNECT');
  res.status(204).end();
};

const trace = async (req, res) => {
  res.json({
    method: req.method,
    headers: req.headers,
    message: 'TRACE recebido',
  });
};

const connect = async (req, res) => {
  res.status(501).json({ message: 'CONNECT não implementado no servidor.' });
};

const patch = async (req, res) => {
  res.status(501).json({ message: 'PATCH parcial não implementado ainda.' });
};

const propfind = async (req, res) => {
  res.status(501).json({ message: 'PROPFIND não implementado, WebDAV.' });
};

const mkcol = async (req, res) => {
  res.status(501).json({ message: 'MKCOL não implementado, WebDAV.' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  head,
  options,
  trace,
  connect,
  patch,
  propfind,
  mkcol,
};
