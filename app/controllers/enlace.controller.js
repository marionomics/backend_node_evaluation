const Enlace = require("../models/enlaces.model.js");

/* -----------------------------------------
        Controllers for enlaces
    ---------------------------------------*/

// CREATE A NEW ENLACE

exports.createEnlace = (req, res) => {
  // Validate request
  if (!req.body.nombre_enlace) {
    return res.status(400).send({
      message: "field 'name' cannot be empty"
    });
  }

  // Create a Product
  const enlace = new Enlace({
    nombre_enlace: req.body.nombre_enlace || "Untitled position",
    clave_enlace: req.body.clave_enlace || "Enlace sin clave",
    captura_externa:
      req.body.captura_externa || "Sin registro de capturista externo"
  });

  // Save product int the database
  enlace
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "There was an error while creating the enlace data"
      });
    });
};

// Return all enlaces

exports.findAllEnlaces = (req, res) => {
  Enlace.find()
    .then(enlaces => {
      res.send(enlaces);
    })
    .catch(err => {
      message: err.message ||
        "Some error occurred while retrieving your enlaces";
    });
};
