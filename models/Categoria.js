const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    categoria: String,
    enabled :Boolean
});

module.exports = mongoose.model('Categoria',categoriaSchema);