const Categoria = require('../models/Categoria');

module.exports = {
    list: function (req, res) {
        Categoria.find({}).then(function (categoriaFounded) {
            if (categoriaFounded) return res.status(200).send(categoriaFounded)
            res.status(404).send({ message: "Categoria not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    },
    create : function (req, res){
        Categoria.create({categoria : req.body.categoria, enabled: req.body.enabled}
             , function(err, nuevoCategoria){
            if(err){
                res.status(500).send ({errors: err.errors})
            }else{
                res.status(201).send({nuevoCategoria})
            }
        })
    },
    delete : ( function (req, res) {
        Categoria.findByIdAndUpdate(req.params.id, { enabled: false }, { new: true })
            .then(function (idDeleted) {
                if (idDeleted) return res.status(200).send({ "Categoria_eliminada": idDeleted })
                res.status(404).send("Categoria no encontrada");
            }).catch(function (error) {
                res.status(500).send("Error interno, no se pudo eliminar")
            });
    }),
    update: function(req, res){
        var update_values = {categoria : req.body.categoria, enabled: req.body.enabled }
            Categoria.findByIdAndUpdate(req.params.id, update_values,{ new: true }, function(err, updateCategoria){
            if(err){
                res.status(500).send({errors: err.errors})
            }else{
                res.status(201).send({updateCategoria})
            }
        })
    }





}
