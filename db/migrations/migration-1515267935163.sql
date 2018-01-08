/c moon_phase
DROP TABLE IF NOT EXISTS

CREATE TABLE IF NOT EXISTS moonphase (
  id BIGSERIAL PRIMARY KEY,
  moon_date VARCHAR(255),
  moon_time VARCHAR(255),
  imageUrl VARCHAR(255)
)