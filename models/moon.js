const db = require('../db/config');

const Moon = {};

Moon.findAll = () => {
  return db.query('SELECT * FROM moon_phase');
};

module.exports = Moon;