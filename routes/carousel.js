const express = require('express');
const router = express.Router();
const carouselImagenController = require('../controllers/carouselimagenController');
const auth = require('../middleware/auth');

// middleware that is specific to this router
  router.get('/', carouselImagenController.list);
  router.post('/',auth, carouselImagenController.create);
  router.delete('/:id',auth, carouselImagenController.delete);
  router.patch('/:id',auth, carouselImagenController.update);
  
  module.exports = router; 