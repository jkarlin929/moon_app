const db = require('../db/config');

const Moon = {};

Moon.findAll = () => {
  return db.query('SELECT * FROM moonphasedata JOIN moonphase ON moonphase.moonphasedata_id = moonphasedata.moonphasedata_id');
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
      imageurl = $3
      WHERE id = $4
      `,
      [moon.date, moon.time, moon.imageurl, id]
    );
};

Moon.create = moon => {
  // console.log("this is Moon.create: ", moon.date)
  return db.one(
    `
    INSERT INTO moonphase
    (moon_date, moon_time, imageurl)
    VALUES ($1, $2, $3) RETURNING *
    `,
    [moon.date, moon.time, moon.imageurl]
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