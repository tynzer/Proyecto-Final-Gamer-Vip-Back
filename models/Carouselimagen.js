 const mongoose = require('mongoose');

const carouselimagenSchema = new mongoose.Schema({
    URL: String,
    titulo: String,
    texto: String,
    enabled: Boolean,
    categoria: String
});


module.exports = mongoose.model('Carouselimagen',carouselimagenSchema);