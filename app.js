const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

const CONNECTION_STRING = "mongodb+srv://root:guayerd@cluster0.elmbs.mongodb.net/guayerd-bikes?retryWrites=true&w=majority";

const carouselRouter = require('./routes/carousel'); 
const productosRouter = require('./routes/productos');
const categoriasRouter = require('./routes/categorias');

const User = require("./models/User");
//////////////////// Aplico Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("short"));

//routas 

app.use('/carousel', carouselRouter); 
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);


//Levantar la applicacion luego de realizar la conexion de mongoose a Atlas.

mongoose.connect(CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {

    if (err) {
        console.error(err.message)
    } else {
        console.log("Conexion establecida");
        app.listen(PORT, function () {
            console.log("Server Express Listening");
        });
    }
})