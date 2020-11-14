const express = require('express');
const router = express.Router(); 
const productosController = require('../controllers/productosController');
  
// middleware that is specific to this router
router.get('/', productosController.list);
   

module.exports = router;