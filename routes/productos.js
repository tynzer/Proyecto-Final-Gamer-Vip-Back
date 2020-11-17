const express = require('express');
const router = express.Router(); 
const productosController = require('../controllers/productosController');
  
// middleware that is specific to this router
router.get('/', productosController.list);
router.post('/', productosController.create);
router.delete('/:id', productosController.delete);
router.put('/:id', productosController.update);

module.exports = router;