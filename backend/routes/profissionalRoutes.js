// const express = require('express');
// const controller = require('../controllers/profissionalController');
// const ValidateProfissional = require('../middleware/validateProfissional');  // Importe a classe

// class ProfissionalRoutes {
//   constructor() {
//     this.router = express.Router();
//     this.registerRoutes();
//   }

//   registerRoutes() {
//     // Verifique se o ValidateProfissional.validate está sendo referenciado corretamente
//     this.router.get('/', controller.getAll);
//     this.router.get('/:matricula', controller.getById);
//     this.router.post('/', ValidateProfissional.validate, controller.create);  // Middleware de validação
//     this.router.put('/:matricula', ValidateProfissional.validate, controller.update);  // Middleware de validação
//     this.router.delete('/:matricula', controller.remove);
//   }

//   getRouter() {
//     return this.router;
//   }
// }

// module.exports = new ProfissionalRoutes().getRouter();
const express = require('express');
const controller = require('../controllers/profissionalController');
const ValidateProfissional = require('../middleware/validateProfissional');

class ProfissionalRoutes {
  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  registerRoutes() {
    /**
     * @swagger
     * /profissionais:
     *   get:
     *     summary: Retorna todos os profissionais
     *     tags: [Profissionais]
     *     responses:
     *       200:
     *         description: Lista de profissionais
     */
    this.router.get('/', controller.getAll);

    /**
     * @swagger
     * /profissionais/{matricula}:
     *   get:
     *     summary: Retorna um profissional por matrícula
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: matricula
     *         required: true
     *         schema:
     *           type: string
     *         description: Matrícula do profissional
     *     responses:
     *       200:
     *         description: Profissional encontrado
     *       404:
     *         description: Profissional não encontrado
     */
    this.router.get('/:matricula', controller.getById);

    /**
     * @swagger
     * /profissionais:
     *   post:
     *     summary: Cria um novo profissional
     *     tags: [Profissionais]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *               idade:
     *                 type: integer
     *               email:
     *                 type: string
     *     responses:
     *       201:
     *         description: Profissional criado com sucesso
     */
    this.router.post('/', ValidateProfissional.validate, controller.create);

    /**
     * @swagger
     * /profissionais/{matricula}:
     *   put:
     *     summary: Atualiza um profissional existente
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: matricula
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *               idade:
     *                 type: integer
     *               email:
     *                 type: string
     *     responses:
     *       200:
     *         description: Profissional atualizado
     *       404:
     *         description: Profissional não encontrado
     */
    this.router.put('/:matricula', ValidateProfissional.validate, controller.update);

    /**
     * @swagger
     * /profissionais/{matricula}:
     *   delete:
     *     summary: Remove um profissional
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: matricula
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Profissional removido com sucesso
     */
    this.router.delete('/:matricula', controller.remove);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new ProfissionalRoutes().getRouter();
