 const mongoose = require('mongoose');

const carouselimagenSchema = new mongoose.Schema({
    link: String,
    titulo: String,
    texto: String,
    enabled: Boolean
});


module.exports = mongoose.model('Carouselimagen',carouselimagenSchema);