const mongoose = require("mongoose");

// Model for job positions

const PositionSchema = mongoose.Schema({
  salary: Number
});

module.exports = mongoose.model("Position", PositionSchema);
