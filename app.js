const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 3001;

const CONNECTION_STRING = "mongodb+srv://root:guayerd@cluster0.elmbs.mongodb.net/guayerd-bikes?retryWrites=true&w=majority";

/* const carouselRouter = require('./routes/carousel'); 
const productosRouter = require('./routes/productos');
const categoriasRouter = require('./routes/categorias');


const Producto = require("./models/Producto");
*/
const User = require("./models/User");
//////////////////// Aplico Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("short"));

app.get("/", function (req, res) {

    res.status(200).send({ message: "Coupon not found." });

});

/* 
app.use('/carousel', carouselRouter); 
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);
*/

app.get("/productos",function (req, res) {
    User.find({enabled:true}).then(function (productFounded) {
        if (productFounded) return res.status(200).send(productFounded)
        res.status(404).send({ message: "Products not found" });
    }).catch(function (error) {
        res.status(500).send({ message: "Internal error, the product could not be searched." })
    });
});


//Levantar la applicacion luego de realizar la conexion de mongoose a Atlas.

mongoose.connect(CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {

    if (err) {
        console.error(err.message)
    } else {
        console.log("Conexion establecida");
        app.listen(process.env.PORT || PORT, function () {
            console.log("Server Express Listening");
        });
    }
})