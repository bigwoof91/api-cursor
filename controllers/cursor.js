const db = require("../models");

exports.setCoordinates = function (req, res, next) {

  console.log(db.coordinates)
  db.coordinates.create({
    ...req.body
  }).then(function (data) {
    // console.log(data)
    return res.status(201).json({
      data
    });
  });

};