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

Moon.create = movie => {
  return db.one(
    `
    INSERT INTO moonPhase
    (date)
    VALUES ($1) RETURNING *
    `,
    [moon.date]
    );
};

Moon.destroy = id =>{
  return db.none(
    `
    DELETE FROM moon
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Moon;