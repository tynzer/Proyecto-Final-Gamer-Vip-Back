const Producto = require('../models/Producto');

module.exports = {
    list: function (req, res) {
        Producto.find({}).then(function (productFounded) {
            if (productFounded) return res.status(200).send(productFounded)
            res.status(404).send({ message: "Products not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    }
}



