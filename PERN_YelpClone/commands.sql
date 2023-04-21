-- create Database
CREATE DATABASE yelp;


-- tables
-- resturants
-- reviews

CREATE TABLE resturants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);



-- Insert some data
INSERT INTO resturants(id, name, location, price_range)
VALUES (124, 'pizza hut', 'vegas', 2 );

