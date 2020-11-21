const express = require('express');
const router = express.Router(); 
const productosController = require('../controllers/productosController');
const auth = require('../middleware/auth');
  
// middleware that is specific to this router
router.get('/', productosController.list);
router.post('/',auth, productosController.create);
router.delete('/:id',auth, productosController.delete);
router.patch('/:id',auth, productosController.update);

module.exports = router;