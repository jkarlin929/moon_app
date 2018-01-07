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

moonController.show = (req, res) => {
  Moon.findById(req.params.id)
  .then(moon => {
    res.render('moon/show', {
      moon : moon
    })
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = moonController;