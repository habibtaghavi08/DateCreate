const db = require("../models");

// Defining methods for the datesController
module.exports = {
  findAll: function(req, res) {
    console.log('findall')
    db.Date
      .find()
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDateById: function(req, res) {
    db.Date
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createDate: function(req, res) {
    db.Date
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateDate: function(req, res) {
    db.Date
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeDate: function(req, res) {
    db.Date
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
