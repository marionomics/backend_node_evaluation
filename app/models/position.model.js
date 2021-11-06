const mongoose = require("mongoose");

// Model for job positions

const PositionSchema = mongoose.Schema({
  name: String,
  salary: Number
});

module.exports = mongoose.model("Position", PositionSchema);
