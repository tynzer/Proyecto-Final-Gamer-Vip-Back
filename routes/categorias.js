const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

// middleware that is specific to this router
  router.get('/', categoriasController.list);
   
  
  module.exports = router;