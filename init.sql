DROP DATABASE IF EXISTS cinemaDB;

CREATE DATABASE cinemaDB;
USE cinemaDB;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	avatar varchar(255) NOT NULL DEFAULT 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
	fullName varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	removeRequest BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE userRoles (
	id INT NOT NULL AUTO_INCREMENT,
	userId INT NOT NULL,
	roleId INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE films (
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	image varchar(255) NOT NULL,
	tags varchar(255) NOT NULL,
	description TEXT NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE NOT NULL,
	ticketPrice varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
	filmId INT NOT NULL,
	userId INT NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE userRoles ADD CONSTRAINT userRoles_fk0 FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE userRoles ADD CONSTRAINT userRoles_fk1 FOREIGN KEY (roleId) REFERENCES roles(id);

ALTER TABLE orders ADD CONSTRAINT orders_fk0 FOREIGN KEY (filmId) REFERENCES films(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE orders ADD CONSTRAINT orders_fk1 FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- ========================================= 
 
INSERT INTO roles (title) VALUES ("user"), ("admin");

INSERT INTO users
(avatar, fullName, email, password, removeRequest)
VALUES
("https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1", "Alexandr Kleymonov", "alex@gmail.com", "$2a$10$At8koV4DfdoYpJ79CG0YHuwGbqU6zGrKYa/dSnuxzO3UsUIjpLteC", 0);

INSERT INTO userRoles (userId, roleId) VALUES (1,1);

INSERT INTO films
(title, image, tags, description, startDate, endDate, ticketPrice)
VALUES
("Hello","https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1", "Action", "desc", "2019-11-08", "2019-11-08", "$13");

INSERT INTO orders (filmId, userId) VALUES (1,1);