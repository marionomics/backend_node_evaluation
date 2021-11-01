const mongoose = require("mongoose");

// Model for Survey

const SurveySchema = mongoose.Schema({
  RespondentId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Respondent" }],
  survey_date: { type: Date, default: Date.now },
  SurveyedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }]
});
