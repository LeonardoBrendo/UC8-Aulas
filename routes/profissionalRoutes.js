const express = require('express');
const router = express.Router();
const controller = require('../controllers/profissionalController');
const validate = require('../middleware/validateProfissional');

router.get('/', controller.getAll);
router.get('/:matricula', controller.getById);
router.post('/', validate, controller.create);
router.put('/:matricula', validate, controller.update);
router.delete('/:matricula', controller.remove);

module.exports = router;