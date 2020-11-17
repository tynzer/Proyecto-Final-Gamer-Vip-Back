const Producto = require('../models/Producto');

module.exports = {
    list: function (req, res) {
        Producto.find({}).then(function (productFounded) {
            if (productFounded) return res.status(200).send(productFounded)
            res.status(404).send({ message: "Products not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    },
    create : function (req, res){
        Producto.create({categoria : req.body.categoria, marca: req.body.marca, modelo: req.body.modelo, precio: req.body.precio, cantidad:  req.body.cantidad,
             SKU: req.body.SKU , descripcion: req.body.descripcion , peso :req.body.peso, linkImagen: req.body.linkImagen, titulo : req.body.titulo}
             , function(err, nuevoProducto){
            if(err){
                res.send ({errors: err.errors})
            }else{
                res.status(201).send({nuevoProducto})
            }
        })
    },
    delete : ( function (req, res) {
        Producto.findByIdAndUpdate(req.params.id, { enabled: false }, { new: true })
            .then(function (idDeleted) {
                if (idDeleted) return res.status(200).send({ "Producto_eliminado": idDeleted })
                res.status(404).send("Producto no encontrado");
            }).catch(function (error) {
                res.status(500).send("Error interno, no se pudo eliminar")
            });
    }),
    update: function(req, res){
        var update_values = {categoria : req.body.categoria, marca: req.body.marca, modelo: req.body.modelo, precio: req.body.precio, cantidad:  req.body.cantidad,
            SKU: req.body.SKU , descripcion: req.body.descripcion , peso :req.body.peso, linkImagen: req.body.linkImagen, titulo : req.body.titulo}
            Producto.findByIdAndUpdate(req.params.id, update_values, { new: true }, function(err, updateProducto){
            if(err){
                res.status(500).send({errors: err.errors})
            }else{
                res.status(201).send({updateProducto})
            }
        })
    }




}


