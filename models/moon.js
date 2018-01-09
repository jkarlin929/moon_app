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
      `UPDATE moonphase SET
      moon_date = $1,
      moon_time = $2
      WHERE id = $3
      `,
      [moon.date, moon.time, id]
    );
};

Moon.create = moon => {
  console.log("this is Moon.create: ", moon.date)
  return db.one(
    `
    INSERT INTO moonphase
    (moon_date)
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