DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);



-- seed data input with some traditional hamburgers
INSERT INTO burgers (burger_name) VALUES ('small hamburger');
INSERT INTO burgers (burger_name) VALUES ('medium hamburger');
INSERT INTO burgers (burger_name, devoured) VALUES ('cheesburger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('double burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('bacon burger', true);
INSERT INTO burgers (burger_name) VALUES ('pizza burger');


SELECT * FROM burgers;



-- IMPORTANT !!!
-- FYI - when running on Heroku, make sure to replace every instance of burgers_db 
-- with the name of the database given for the JawsDB 
-- which for my case is = iif8e3kkfh8tmgmx 

-- not used - names too long, use seeding info above 
-- INSERT burgers(burger_name, devoured) VALUES
-- ("Hamburger, 8 oz. Angus",false),
-- ("Cheeseburger, 10 oz. Angus",false),
-- ("Bacon Cheesburger, 10 oz. Angus",false),
-- ("Mushroom Bacon Cheeseburger, 10 oz. Angus",false),
-- ("Double Cheeder Bacon Mushroom Burger, 12 oz. Angus",false),
-- ("Classic 10 oz. Steak Burger w or w/o cheese",false);