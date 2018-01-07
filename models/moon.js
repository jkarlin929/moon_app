const db = require('../db/config');

const Moon = {};

Moon.findAll = () => {
  return db.query('SELECT * FROM moonPhase');
};

Moon.findById = id => {
  return db.oneOrNone(`SELECT * FROM moonPhase WHERE id = $1`, [id]);
};

module.exports = Moon;