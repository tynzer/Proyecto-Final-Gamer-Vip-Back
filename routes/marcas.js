const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');

// middleware that is specific to this router
  router.get('/', marcasController.list);
router.post('/', marcasController.create);
router.delete('/:id', marcasController.delete);
router.patch('/:id', marcasController.update);
   
  
  module.exports = router;