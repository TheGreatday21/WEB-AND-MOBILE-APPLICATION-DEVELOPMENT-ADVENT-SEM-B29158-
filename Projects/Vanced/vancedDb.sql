-- Active: 1751573138062@@127.0.0.1@3306
CREATE DATABASE vanced;
use vanced;

CREATE TABLE Users  
(
    userId  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    email VARCHAR(40),
    phonenumber VARCHAR(10),
    Gender ENUM('Male','Female'),
    password VARCHAR(100)
);

ALTER TABLE Users AUTO_INCREMENT = 1000;

INSERT INTO Users(name,email,phonenumber,Gender,password)
VALUES
("Elijah","kaizzielijah@gmail.com",0757886106,'Male',"jesuslove"),
("John","gravey@gmail.com",0751008998,'Male',"12345678"),
("Sterie","damn56@gmail.com",0772354043,'Female',"bitchplease");


SELECT * FROM Users;

CREATE VIEW User_names AS
SELECT name FROM Users;

SELECT * FROM User_names;








