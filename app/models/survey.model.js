const mongoose = require("mongoose");

// Model for Survey

const SurveySchema = mongoose.Schema({
  RespondentId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Respondent" }],
  survey_date: { type: Date, default: Date.now },
  SurveyedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  telefono_adicional: Number,
  acepto_entrevista: Boolean,
  conoce_enlace: Boolean,
  invito: Boolean,
  votaria: Boolean,
  info_correcta: Boolean,
  nombre_correcto: Boolean,
  direccion_correcta: Boolean,
  comentarios: String,
  resultado_entrevista: String,
  resultado_general: String
});
