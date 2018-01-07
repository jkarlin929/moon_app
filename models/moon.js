const db = require('../db/config');

const Moon = {};

Moon.findAll = () => {
  return db.query('SELECT * FROM moonphase');
};

Moon.findById = id => {
  // console.log(db)
  return db.oneOrNone(`SELECT * FROM moonphase WHERE id = $1`, [id]);
};

Moon.update = (moon, id) => {
  return db.none(
      `
      UPDATE moonphase SET
      date = $1
      WHERE id = $2
      `,
      [moon.date, id]
    );
};

Moon.create = movie => {
  return db.one(
    `
    INSERT INTO moonphase
    (date)
    VALUES ($1) RETURNING *
    `,
    [moon.date]
    );
};

Moon.destroy = id =>{
  return db.none(
    `
    DELETE FROM moonphase
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Moon;