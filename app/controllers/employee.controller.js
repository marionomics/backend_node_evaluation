const Employee = require("../models/employee.model.js");

/* -----------------------------------------
        Controllers for products 
    ---------------------------------------*/

// Create and Save a new employee
exports.createEmployee = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "field 'name' cannot be empty"
    });
  }

  // Create a Product
  const employee = new Employee({
    name: req.body.name || "Untitled employee",
    hired_date: req.body.hired_date,
    position_id: req.body.position_id
  });

  // Save product int the database
  employee
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "There was an error while creating the employee data"
      });
    });
};

// Return all employees

exports.findAllEmployees = (req, res) => {
  Employee.find()
    .then(employees => {
      res.send(employees);
    })
    .catch(err => {
      message: err.message ||
        "Some error occurred while retrieving your employees";
    });
};
