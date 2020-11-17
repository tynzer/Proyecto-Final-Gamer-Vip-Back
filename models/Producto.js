const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
    categoria: String,
    marca: String,
    modelo: String,
    precio: Number,
    cantidad: Number,
    SKU: String,
    descripcion: String,
    peso: String,
    enabled: Boolean,
    linkImagen : String,
    titulo : String
});
const ProdcuctoModel = mongoose.model("Producto",productoSchema); 
module.exports = ProdcuctoModel;

 