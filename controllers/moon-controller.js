const Moon = require('../models/moon');
const axios = require('axios');
const moonController = {};
const Body = require('../models/bodyinfo.js');

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

// moonController.search = (req, res) => {
//   axios({
//     method: 'get',
//     url: `http://api.usno.navy.mil/imagery/moon.png?date=${req.body.date}&time=5:00`
//   })
//   .then((moon) => {
//     console.log(moon)
//     // res.render('moon/index', {pic: moon.data })
//     res.json({
//       status: 200,
//       message: 'moon stuff here',
//       moon: moon.data
//     })
//   }).catch((err) => {
//     res.status(500).json(err)
//   });
// };

moonController.show = (req, res) => {
  Moon.findById(req.params.id)
  .then(moon => {
     console.log(moon)
    if (moon.id) {
        Body.findById(moon.id)
          .then(body => {
            // console.log(body.id)
            res.render('moon/show', { moon: moon, body: body })
          })
          .catch(err => {
            res.status(400).json(err);
          });
      } else {
        res.render('moon/show', { moon: moon, body: undefined })
      }
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

moonController.edit = (req, res) => {
  Moon.findById(req.params.id)
    .then(moon => {
      Body.findAll()
        .then(body => {
          res.render('moon/edit', {
            moon: moon, body: body
          })
        })
    .catch(err => {
      res.status(400).json(err);
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

//part of .edit
moonController.update = (req, res) => {
  Moon.update({
      date: req.body.date,
      time: req.body.time,
      body_id: req.body.body_id,
      imageurl: `http://api.usno.navy.mil/imagery/${req.body.body_id}.png?date=${req.body.date}&time=${req.body.time}`
    }, req.params.id)
    .then(() => {
      res.redirect(`/moon/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
//part of .create
moonController.new = (req, res) => {
  Body.findAll()
  .then(body => {
    console.log(body)
    res.render('moon/new', {body: body})
  })
  .catch(err => {
    res.status(400).json(err)
  });
};

moonController.create = (req, res) => {
  console.log("this is req.body", req.body)
  Body.findById(req.body.body_id)
  .then(body => {
    // console.log("this is findById data", body.bodies)
  Moon.create({
    date: req.body.date,
    time: req.body.time,
    body_id: req.body.body_id,
    bodies: body.bodies,
    imageurl: `http://api.usno.navy.mil/imagery/${body.bodies}.png?date=${req.body.date}&time=${req.body.time}`
    })
    .then(moon => {
      res.redirect(`moon/${moon.id}`)
  })
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