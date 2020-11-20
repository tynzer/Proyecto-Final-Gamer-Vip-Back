const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema({
    marca: String,
    enabled :Boolean
});

module.exports = mongoose.model('Marca',marcaSchema);