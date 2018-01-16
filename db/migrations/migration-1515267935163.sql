
DROP TABLE IF EXISTS moonphase;

CREATE TABLE IF NOT EXISTS moonphase (
  id BIGSERIAL PRIMARY KEY,
  moon_date VARCHAR(255),
  imageurl VARCHAR(255),
  moon_time VARCHAR(255),
  body_id INTEGER REFERENCES body(id)
)