const mongoose = require("mongoose");

// Model for secciones

const SeccionSchema = mongoose.Schema({
    seccion = Number,
    distrito_fed = Number,
    municipio = String,
    estado = String
});

module.exports = mongoose.model("Seccion", SeccionSchema)