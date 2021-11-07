const mongoose = require("mongoose");

// Model for secciones

const SeccionSchema = mongoose.Schema({
    ENTIDAD = Number,
    `NOMBRE ENTIDAD` = String,
    MUNICIPIO = Number,
    `NOMBRE MUNICIPIO` = String,
    SECCION = Number,
    TIPO = String
});

module.exports = mongoose.model("Seccion", SeccionSchema)