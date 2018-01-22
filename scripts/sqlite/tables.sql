CREATE TABLE keys
(
  id   VARCHAR(8) NOT NULL
    PRIMARY KEY,
  date DATETIME DEFAULT datetime('now')
);

CREATE UNIQUE INDEX keys_id_uindex
  ON keys (id);

CREATE TABLE satellite
(
  name      VARCHAR(255)
    PRIMARY KEY,
  ip_adress VARCHAR(255) NOT NULL,
  last_key  KEYS
    CONSTRAINT last_key
    REFERENCES keys (id)
);

CREATE UNIQUE INDEX satellite_name_uindex
  ON satellite (name);

