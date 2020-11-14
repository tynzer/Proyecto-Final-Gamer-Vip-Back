const Categoria = require('../models/Categoria');

module.exports = {
    list: function (req, res) {
        Categoria.find({}).then(function (categoriaFounded) {
            if (categoriaFounded) return res.status(200).send(categoriaFounded)
            res.status(404).send({ message: "Categoria not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    }
}
