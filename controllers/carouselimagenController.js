const Carouselimagen = require('../models/Carouselimagen.js');

module.exports = {
    list: function (req, res) {
        Carouselimagen.find({}).then(function (carouselFounded) {
            if (carouselFounded) return res.status(200).send(carouselFounded)
            res.status(404).send({ message: "Products not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    },
    create : function (req, res){
        Carouselimagen.create({categoria : req.body.categoria, enabled: req.body.enabled, internavalo: req.body.internavalo, titulo:req.body.titulo , texto:req.body.texto, URL:req.body.URL }
             , function(err, nuevoCarouselimagen){
            if(err){
                res.send ({errors: err.errors})
            }else{
                res.status(201).send({nuevoCarouselimagen})
            }
        })
    },
    delete : ( function (req, res) {
        Carouselimagen.findByIdAndUpdate(req.params.id, { enabled: false }, { new: true })
            .then(function (idDeleted) {
                if (idDeleted) return res.status(200).send({ "Carouselimagen_eliminada": idDeleted })
                res.status(404).send("Carouselimagen no encontrada");
            }).catch(function (error) {
                res.status(500).send("Error interno, no se pudo eliminar")
            });
    }),
    update: function(req, res){
        var update_values = {categoria : req.body.categoria, enabled: req.body.enabled, internavalo: req.body.internavalo, titulo:req.body.titulo , texto:req.body.texto, URL:req.body.URL }
            Carouselimagen.findByIdAndUpdate(req.params.id, update_values, { new: true },function(err, updateCarouselimagen){
            if(err){
                res.status(500).send({errors: err.errors})
            }else{
                res.status(201).send({updateCarouselimagen})
            }
        })
    }

}
