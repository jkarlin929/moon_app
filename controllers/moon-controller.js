const Moon = require('../models/moon');
const axios = require('axios');
const moonController = {};

moonController.index = (req, res) => {
  Moon.findAll()
  .then(moon => {
    res.render('moon/index',
      {moon: moon,
        time: time});
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

moonController.search = (req, res) => {
  axios({
    method: 'get',
    url: `http://api.usno.navy.mil/imagery/moon.png?date=${req.body.date}&time=4:20`
  })
  .then((moon) => {
    res.json({
      status: 200,
      message: 'moon stuff here',
      moon: moon.moon_date
    })
  }).catch((err) => {
    res.status(500).json(err)
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

moonController.edit = (req, res) => {
  Moon.findById(req.params.id)
    .then(moon => {
      res.render('edit', {
        moon: moon,
        imageurl : imageurl
      })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

moonController.update = (req, res) => {
  Moon.update({
      date: req.body.date,
      imageurl: req.body.imageurl
    }, req.params.id)
    .then(() => {
      res.redirect(`/moon/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

moonController.new = (req, res) => {
  res.render('/moon/new')
};

moonController.create = (req, res) => {
  Moon.create({
    date: req.body.date
  })
  .then(moon => {
    res.redirect(`/moon/${moon.id}`)
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

moonController.destroy = (req, res) => {
  Moon.destroy(req.params.id)
  .then(() => {
    res.redirect('/moon')
  })
  .catch(err => {
    res.status(400).json(err);
  });
}


module.exports = moonController;