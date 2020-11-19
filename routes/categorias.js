const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

// middleware that is specific to this router
  router.get('/', categoriasController.list);
router.post('/', categoriasController.create);
router.delete('/:id', categoriasController.delete);
router.patch('/:id', categoriasController.update);
   
  
  module.exports = router;