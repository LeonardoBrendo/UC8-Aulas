const repository = require('../repositories/profissionalRepository');

const getAll = async () => (await repository.findAll()).rows;

const getById = async (id) => {
  const result = await repository.findById(id);
  return result.rows[0];
};

const create = async (dados) => {
  const result = await repository.create(dados);
  return result.rows[0];
};

const update = async (id, dados) => {
  const result = await repository.update(id, dados);
  return result.rows[0];
};

const remove = async (id) => {
  const result = await repository.remove(id);
  return result.rows[0];
};

module.exports = { getAll, getById, create, update, remove };