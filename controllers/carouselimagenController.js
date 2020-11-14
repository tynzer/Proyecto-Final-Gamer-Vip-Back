/* const Carouselimagen = require('../models/Carouselimagen.js');

module.exports = {
    list: function (req, res) {
        Carouselimagen.find({}).then(function (carouselFounded) {
            if (carouselFounded) return res.status(200).send(carouselFounded)
            res.status(404).send({ message: "Products not found" });
        }).catch(function (error) {
            res.status(500).send({ message: "Internal error, the product could not be searched." })
        });
    }
} */
