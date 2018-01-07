const Moon = require('../models/moon');

const moonController = {};

moonController.index = (req, res) => {
  Moon.findAll()
  .then(moon => {
    res.render('moon/index',
      {moon: moon});
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = moonController;