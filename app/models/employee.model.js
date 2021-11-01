const mongoose = require("mongoose");

// Model for Employees

const EmployeeSchema = mongoose.Schema({
  name: String,
  hired_date: { type: Date, default: Date.now },
  position_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Puesto" }]
});

module.exports = mongoose.model("Employee", EmployeeSchema);
