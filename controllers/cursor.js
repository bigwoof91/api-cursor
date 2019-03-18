const db = require("../models");

module.exports.setCoordinates = function (req, res, next) {
  db.coordinates.create({
    ...req.body
  }).then(function (data) {
    // console.log(data)
    return res.status(201).json({
      data
    });
  });
};