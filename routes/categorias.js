const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');
const auth = require('../middleware/auth');

// middleware that is specific to this router
  router.get('/', categoriasController.list);
router.post('/',auth, categoriasController.create);
router.delete('/:id',auth, categoriasController.delete);
router.patch('/:id',auth, categoriasController.update);
   
  
  module.exports = router;