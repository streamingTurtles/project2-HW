USE youreats_db;
SET FOREIGN_KEY_CHECKS=0;

-- inserts for categories
INSERT INTO categories (name) VALUES
('Desserts'),('Burgers'),('Drinks'),('Chicken'), ('Sushi'), ('MisoSoup'), ('Sashimi');


-- inserts for products
INSERT INTO products (name, description, image_name, price, stock, restaurantId, categoryId, createdAt, updatedAt) VALUES
('Big Mac', 'single pattie', 'pic1.png', '2.99', '500', '1', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('Quarter Pounder', '4oz pattie', 'pic2.png', '3.99', '500', '1', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('double Quarter Pounder', '8oz pattie', 'pic3.png', '4.99', '500', '1','2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('Sprite', '8oz sprite', 'pic3.png', '0.99', '500', '1','3', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('Fries', 'Perfect Fries', 'pic3.png', '2.99', '500', '1','8', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
('Chocolat Chip Cookies', 'cookie', 'pic3.png', '2.50', '500', '1','1', '2021-02-26 02:09:01', '2021-02-26 6:09:01');



-- ('salmon', '1 piece sashimi', 'pic4.png', '2.99', '500', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
-- ('tuna', '1 piece sashimi', 'pic5.png', '3.99', '500', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
-- ('fatty Tuna', '1 piece sashimi', 'pic6.png', '4.99', '500', '2', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),

-- ('taco', 'single taco', 'pic7.png', '2.99', '500', '3', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
-- ('burrito', 'big burrito', 'pic8.png', '3.99', '500', '3', '2021-02-26 02:09:01', '2021-02-26 6:09:01'),
-- ('Shio Ramen', 'Miso Ramen', 'pic9.png', '4.99', '500', '3', '2021-02-26 02:09:01', '2021-02-26 6:09:01');



-- inserts for categories
INSERT INTO restaurants (name, address, phone, image_name) VALUES
('McDonalds','101 eat MickieDees', '8765304', 'McDonalds.jpg'),
('Sushi',    '101 eat MickieDees', '8765304', 'sushiplatters.png'),
('Raman',    '101 eat MickieDees', '8765304', 'Shoyu_Ramen.jpg');


-- inserts for users
INSERT INTO users (username, password, email, createdAt, updatedAt) VALUES
('pac1', '$2b$10$6ovU8giiTYBSIVMc7GLy5evwtzAZcaWpxLamt7BNotH.JUdZ7abcd', 'test@test1.com', '2021-02-25 21:10:01', '2021-02-25 20:10:02'),
('pac2', '$2b$10$6ovU8giiTYBSIVMc7GLy5evwtzAZcaWpxLamt7BNotH.JUdZ7qwer', 'test@test2.com', '2021-02-25 21:10:01', '2021-02-25 20:10:02'),
('pac3', '$2b$10$6ovU8giiTYBSIVMc7GLy5evwtzAZcaWpxLamt7BNotH.JUdZ7abcD', 'test@test3.com', '2021-02-25 21:10:01', '2021-02-25 20:10:02');


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


