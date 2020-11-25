const Producto = require("../models/Producto");

//Mercado Pago
const mercadopago = require("mercadopago");
const { PROD_ACCESS_TOKEN } = require("../configs/config");

module.exports = {
  list: function (req, res) {
    Producto.find({})
      .then(function (productFounded) {
        if (productFounded) return res.status(200).send(productFounded);
        res.status(404).send({ message: "Products not found" });
      })
      .catch(function (error) {
        res.status(500).send({
          message: "Internal error, the product could not be searched.",
        });
      });
  },
  create: function (req, res) {
    Producto.create(
      {
        categoria: req.body.categoria,
        marca: req.body.marca,
        modelo: req.body.modelo,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        SKU: req.body.SKU,
        descripcion: req.body.descripcion,
        peso: req.body.peso,
        linkImagen: req.body.linkImagen,
        titulo: req.body.titulo,
        enabled: req.body.enabled,
        descuento: req.body.descuento,
        destacado : req.body.destacado
      },
      function (err, nuevoProducto) {
        if (err) {
          res.status(500).send({ errors: err.errors });
        } else {
          res.status(201).send({ nuevoProducto });
        }
      }
    );
  },
  delete: function (req, res) {
    Producto.findByIdAndUpdate(req.params.id, { enabled: false }, { new: true })
      .then(function (idDeleted) {
        if (idDeleted)
          return res.status(200).send({ Producto_eliminado: idDeleted });
        res.status(404).send("Producto no encontrado");
      })
      .catch(function (error) {
        res.status(500).send("Error interno, no se pudo eliminar");
      });
  },
  update: function (req, res) {
    const update_values = {
      categoria: req.body.categoria,
      marca: req.body.marca,
      modelo: req.body.modelo,
      precio: req.body.precio,
      cantidad: req.body.cantidad,
      SKU: req.body.SKU,
      descripcion: req.body.descripcion,
      peso: req.body.peso,
      linkImagen: req.body.linkImagen,
      titulo: req.body.titulo,
      enabled: req.body.enabled,
      descuento: req.body.descuento,
      destacado : req.body.destacado
    };
    Producto.findByIdAndUpdate(
      req.params.id,
      update_values,
      { new: true },
      function (err, updateProducto) {
        if (err) {
          res.status(500).send({ errors: err.errors });
        } else {
          res.status(201).send({ updateProducto });
        }
      }
    );
  },
  mercadoPagoList: function (req, res) {
    Producto.findById(req.params.id)
      .then(function (productFounded) {
        if (productFounded) {
          //Mercado Pago
          mercadopago.configure({
            access_token: PROD_ACCESS_TOKEN,
          });

          let preference = {
            items: [
              {
                title: productFounded.titulo,
                unit_price: productFounded.precio,
                picture_url : productFounded.linkImagen,
                description : productFounded.descripcion,
                category_id : productFounded.categoria,
                quantity: 1,
              },
            ],
          };

          mercadopago.preferences
            .create(preference)
            .then(function (response) {
              return res
                .status(200)
                .send({ init_point: response.body.init_point }); //response.body.id
              // Este valor reemplazará el string "<%= global.id %>" en tu HTML
              //  global.id = response.body.id;
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          res.status(404).send({ message: "Products not found" });
        }
      })
      .catch(function (error) {
        res.status(500).send({
          message: "Internal error, the product could not be searched.",
        });
      });
  },
};
