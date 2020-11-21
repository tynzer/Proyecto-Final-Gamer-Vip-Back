const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;
CONNECTION_STRING = "mongodb+srv://root:root@cluster0.cxwwm.mongodb.net/GamerVip?retryWrites=true&w=majority";
// import router
const carouselRouter = require('./routes/carousel'); 
const productosRouter = require('./routes/productos');
const categoriasRouter = require('./routes/categorias');
const usersRouter = require('./routes/users');
const marcasRouter = require('./routes/marcas');
const auth = require('./middleware/auth');

//////////////////// Aplico Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("short"));

//rutas 
app.use('/',usersRouter)
app.use(auth)
app.use('/carousel', carouselRouter); 
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);
app.use('/marcas', marcasRouter);

//Levantar la applicacion luego de realizar la conexion de mongoose a Atlas.

mongoose.set("useCreateIndex", true)
.connect(CONNECTION_STRING,{ useUnifiedTopology: true, useNewUrlParser: true }, function (err) {

    if (err) {
        console.error(err.message)
    } else {
        console.log("Conexion establecida");
        app.listen(PORT, function () {
            console.log("Server Express Listening");
        });
    }
})