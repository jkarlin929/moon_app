
CREATE TABLE IF NOT EXISTS moonphasedata(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  moonrise VARCHAR(255),
  moonset VARCHAR(255),
  closestphase VARCHAR(255),
  closestphasedate VARCHAR(255),
  closestphasetime VARCHAR(255),
  fracillum VARCHAR(255),
  currentphase VARCHAR(255)
);

ALTER TABLE moonphase ADD COLUMN moonphasedata_id INTEGER;