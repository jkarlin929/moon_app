const db = require('../db/config');

const Moon = {};

Moon.findAll = () => {
  return db.query('SELECT * FROM moonPhase');
};

Moon.findById = id => {
  return db.query(`SELECT * FROM moonPhase WHERE id = $1`, [id]);
};

Moon.update = (moon, id) => {
  return db.none(
      `
      UPDATE moonPhase SET
      date = $1,
      WHERE id = $2
      `,
      [moon.date, id]
    );
};


module.exports = Moon;