const express = require('express');
const router = express.Router();
const controller = require('../controllers/profissionalController');
const validate = require('../middleware/validateProfissional');

router.get('/', controller.getAll);
router.get('/:matricula', controller.getById);
router.post('/', validate, controller.create);
router.put('/:matricula', validate, controller.update);
router.delete('/:matricula', controller.remove);

router.head('/', controller.head); 
router.options('/', controller.options); 
router.trace('/', controller.trace); 
router.all('/connect', controller.connect); 
router.patch('/:matricula', controller.patch); 

router.all('/webdav/propfind', controller.propfind); 
router.all('/webdav/mkcol', controller.mkcol);       

module.exports = router;