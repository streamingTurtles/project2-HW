
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;



-- inserts for products
INSERT INTO products (name, description, image_name, price, stock, categoryId, createdAt, updatedAt) VALUES
('Big Mac', 'single pattie', 'pic1.png', '2.99', '500', '1', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('Quarter Pounder', '4oz pattie', 'pic2.png', '3.99', '500', '1', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('double Quarter Pounder', '8oz pattie', 'pic3.png', '4.99', '500', '1', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),

('salmon', '1 piece sashimi', 'pic4.png', '2.99', '500', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('tuna', '1 piece sashimi', 'pic5.png', '3.99', '500', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('fatty Tuna', '1 piece sashimi', 'pic6.png', '4.99', '500', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),

('taco', 'single taco', 'pic7.png', '2.99', '500', '3', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('burrito', 'big burrito', 'pic8.png', '3.99', '500', '3', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('nachos', 'chipsAhoy', 'pic9.png', '4.99', '500', '3', '2021-02-26 02:09:01', '2021-02-26 6:09:01');



-- inserts for categories
INSERT INTO categories (name, description, image_name) VALUES
('McDonalds', 'eat MickieDees', 'burger-pic1.png'),
('Sushi', 'eat healthy', 'sushi-pic2.png'),
('Raman', 'eat and be full', 'raman-pic3.png');


-- inserts for users
INSERT INTO users (username, password, email, createdAt, updatedAt) VALUES
-- ('pac', '$1234', 'test@email.com', '2021-02-25 21:10:01', '2021-02-25 20:10:02');
('pac', '$2b$10$6ovU8giiTYBSIVMc7GLy5evwtzAZcaWpxLamt7BNotH.JUdZ7abcD', 'test@test.com', '2021-02-25 21:10:01', '2021-02-25 20:10:02');


-- inserts for cart_items
INSERT INTO cart_items (num, each_price, userId, productId) VALUES
('1', '2.99', '1', '1'),
('1', '3.99', '1', '2'),
('1', '4.99', '1', '3'),
('1', '5.99', '1', '4'),
('1', '6.99', '1', '5'),
('1', '7.99', '2', '6'),
('1', '8.99', '2', '7'),
('1', '9.99', '2', '8'),
('1', '10.99', '2', '9'),
('1', '11.99', '2', '10'),
('1', '12.99', '3', '11'),
('1', '13.99', '3', '12'),
('1', '14.99', '3', '13'),
('1', '15.99', '3', '14'),
('1', '16.99', '3', '15');


SET FOREIGN_KEY_CHECKS=1;











-- DROP DATABASE IF EXISTS burgers_db;

-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- CREATE TABLE burgers(
--     id INT NOT NULL AUTO_INCREMENT,
--     burger_name VARCHAR(200) NOT NULL,
--     devoured BOOLEAN default false,
--     PRIMARY KEY (id)
-- );



-- seed data input with some traditional hamburgers
-- INSERT INTO burgers (burger_name) VALUES ('small hamburger');
-- INSERT INTO burgers (burger_name) VALUES ('medium hamburger');
-- INSERT INTO burgers (burger_name, devoured) VALUES ('cheesburger', true);
-- INSERT INTO burgers (burger_name, devoured) VALUES ('double burger', true);
-- INSERT INTO burgers (burger_name, devoured) VALUES ('bacon burger', true);
-- INSERT INTO burgers (burger_name) VALUES ('pizza burger');

-- SELECT * FROM burgers;



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