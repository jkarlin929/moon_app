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
      moon_time = $2,
      imageurl = $3,
      body_id = $4
      WHERE id = $5
      `,
      [moon.date, moon.time, moon.imageurl, moon.body_id, id]
    );
};

Moon.create = moon => {
  console.log("this is Moon.create: ", moon.date)
  return db.one(
    `
    INSERT INTO moonphase
    (moon_date, moon_time, imageurl, body_id)
    VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [moon.date, moon.time, moon.imageurl, moon.body_id]
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