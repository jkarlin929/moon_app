const db = require('../db/config');

const Body = {};

Body.findAll = () => {
  return db.query('SELECT * FROM body');
}

Body.findById = (id) => {
  return db.oneOrNone(
    'SELECT * FROM body WHERE id = $1', id);
}

module.exports = Body;