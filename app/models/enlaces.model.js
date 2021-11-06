const mongoose = require("mongoose");

// Model for enlaces

const EnlaceSchema = mongoose.Schema({
  clave_enlace: String,
  nombre_enlace: String,
  captura_externa: String
});

module.exports = mongoose.model("Enlace", EnlaceSchema);
