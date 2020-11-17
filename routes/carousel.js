const express = require('express');
const router = express.Router();
const carouselImagenController = require('../controllers/carouselimagenController');

// middleware that is specific to this router
  router.get('/', carouselImagenController.list);
  router.post('/', carouselImagenController.create);
  router.delete('/:id', carouselImagenController.delete);
  router.put('/:id', carouselImagenController.update);
  
  module.exports = router; 