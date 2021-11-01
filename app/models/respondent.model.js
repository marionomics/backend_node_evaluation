const mongoose = require("mongoose");

// Model for respondents

const RespondentSchema = mongoose.Schema({
  EnlaceId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enlace" }],
  SeccionId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Seccion" }],
  tipo: String,
  clave: String,
  paterno: { type: String, required: false },
  materno: String,
  nombre: { type: String, required: false },
  domicilio: String,
  telephone: Number,
  birthday: Date,
  network: String
});

module.exports = mongoose.model("Respondent", RespondentSchema);
