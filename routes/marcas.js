const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');
const auth = require('../middleware/auth');

// middleware that is specific to this router
  router.get('/', marcasController.list);
router.post('/',auth, marcasController.create);
router.delete('/:id',auth, marcasController.delete);
router.patch('/:id',auth, marcasController.update);
   
  
  module.exports = router;