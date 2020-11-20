const Marca = require('../models/Marca');

module.exports = {
    list: function (req, res) {
        Marca.find({}).then(function (marcaFounded) {
            if (marcaFounded) return res.status(200).send(marcaFounded)
            res.status(404).send({ message: "Marca not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    },
    create : function (req, res){
        Marca.create({marca : req.body.marca, enabled: req.body.enabled}
             , function(err, nuevoMarca){
            if(err){
                res.status(500).send ({errors: err.errors})
            }else{
                res.status(201).send({nuevoMarca})
            }
        })
    },
    delete : ( function (req, res) {
        Marca.findByIdAndUpdate(req.params.id, { enabled: false }, { new: true })
            .then(function (idDeleted) {
                if (idDeleted) return res.status(200).send({ "Marca_eliminada": idDeleted })
                res.status(404).send("Marca no encontrada");
            }).catch(function (error) {
                res.status(500).send("Error interno, no se pudo eliminar")
            });
    }),
    update: function(req, res){
        var update_values = {marca : req.body.marca, enabled: req.body.enabled }
            Marca.findByIdAndUpdate(req.params.id, update_values,{ new: true }, function(err, updateMarca){
            if(err){
                res.status(500).send({errors: err.errors})
            }else{
                res.status(201).send({updateMarca})
            }
        })
    }





}
