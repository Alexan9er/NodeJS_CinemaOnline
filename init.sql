DROP DATABASE IF EXISTS cinema_db;

CREATE DATABASE cinema_db;
USE cinema_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	remove_request BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);

CREATE TABLE users_roles (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	role_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE films (
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	image varchar(255) NOT NULL,
	description TEXT NOT NULL,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE tickets (
	id INT NOT NULL AUTO_INCREMENT,
	film_id INT NOT NULL,
	user_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE films_tags (
	id INT NOT NULL AUTO_INCREMENT,
	tag_id INT NOT NULL,
	film_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE tags (
	id INT NOT NULL AUTO_INCREMENT,
	tag varchar(255) NOT NULL UNIQUE,   
	PRIMARY KEY (id)
);

ALTER TABLE users_roles ADD CONSTRAINT users_roles_fk0 FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE users_roles ADD CONSTRAINT users_roles_fk1 FOREIGN KEY (role_id) REFERENCES roles(id);

ALTER TABLE tickets ADD CONSTRAINT tickets_fk0 FOREIGN KEY (film_id) REFERENCES films(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE tickets ADD CONSTRAINT tickets_fk1 FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE films_tags ADD CONSTRAINT films_tags_fk0 FOREIGN KEY (tag_id) REFERENCES tags(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE films_tags ADD CONSTRAINT films_tags_fk1 FOREIGN KEY (film_id) REFERENCES films(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- ===========================

INSERT INTO roles (title) VALUES ("user"), ("admin");

INSERT INTO users 
(first_name, last_name, email, password) 
VALUES 
('Alexandr', 'Kleimionov', 'Kleimionov@gmail.com', '$2a$10$At8koV4DfdoYpJ79CG0YHuwGbqU6zGrKYa/dSnuxzO3UsUIjpLteC');

INSERT INTO users 
(first_name, last_name, email, password) 
VALUES 
('Micola', 'Gusovsky', 'gusov@gmail.com', '$2a$10$At8koV4DfdoYpJ79CG0YHuwGbqU6zGrKYa/dSnuxzO3UsJFWrgkrS');

INSERT INTO users_roles (user_id, role_id) VALUES (1,2);
INSERT INTO users_roles (user_id, role_id) VALUES (2,1);

INSERT INTO films 
(title, image, description, start_date, end_date) 
VALUES 
('Terminator: Dark Fate', 'https://resizing.flixster.com/g4wBBBU3Jiad6H6KhsjnoyvcVvE=/fit-in/200x296.2962962962963/v1.bTsxMzE3Mjk3NTtqOzE4Mjg3OzEyMDA7Mzg0MDs1OTk2', 'desc', '2019-11-08', '2019-12-08');

INSERT INTO films 
(title, image, description, start_date, end_date) 
VALUES 
('Joker', 'https://resizing.flixster.com/_2DMZguOE6ebUBX6rsu2bAPQ_Wg=/fit-in/200x296.2962962962963/v1.bTsxMzE2OTg4NjtqOzE4Mjg3OzEyMDA7Mjc2NDs0MDk2', 'desc Joker', '2019-11-18', '2019-12-12');

INSERT INTO tickets (user_id, film_id) VALUES (1,2);
INSERT INTO tickets (user_id, film_id) VALUES (2,1);
INSERT INTO tickets (user_id, film_id) VALUES (1,1);

INSERT INTO tags (tag) VALUES ('Action & Adventure');
INSERT INTO tags (tag) VALUES ('Horror');
INSERT INTO tags (tag) VALUES ('Drama');

INSERT INTO films_tags (tag_id, film_id) VALUES (1,1);
INSERT INTO films_tags (tag_id, film_id) VALUES (2,2);
INSERT INTO films_tags (tag_id, film_id) VALUES (3,2);