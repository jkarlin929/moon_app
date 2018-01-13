const db = require('../db/config');

const MoonInfo = {};

MoonInfo.findAll = () => {
  return db.query('SELECT * FROM moonphasedata');
}

MoonInfo.findById = (id) => {
  return db.oneOrNone(
    'SELECT * FROM moonphasedata WHERE id = $1', id);
}

module.exports = MoonInfo;