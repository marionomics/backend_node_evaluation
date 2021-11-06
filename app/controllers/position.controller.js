const Position = require("../models/position.model.js");

/* -----------------------------------------
        Controllers for categories 
    ---------------------------------------*/

// Create a new position
exports.createPosition = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "field 'name' cannot be empty"
    });
  }

  // Create a Product
  const position = new Position({
    name: req.body.name || "Untitled position",
    salary: req.body.salary
  });

  // Save product int the database
  position
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "There was an error while creating the position data"
      });
    });
};

// Returns all positions
exports.findAllPositions = (req, res) => {
  Position.find()
    .then(positions => {
      res.send(positions);
    })
    .catch(err => {
      message: err.message ||
        "Some error occurred while retrieving your positions";
    });
};

// Delete a position
