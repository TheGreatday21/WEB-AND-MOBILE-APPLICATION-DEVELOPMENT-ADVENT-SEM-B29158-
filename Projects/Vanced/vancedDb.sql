-- Active: 1751573138062@@127.0.0.1@3306
CREATE DATABASE vanced;
use vanced;

CREATE TABLE Users  
(
    userId  INT PRIMARY KEY NOT NULL  ,
    name VARCHAR(30),
    email VARCHAR(40),
    phonenumber VARCHAR(10),
    password VARCHAR(100)
);

ALTER TABLE Users
COLUMN userId(
    AUTO_INCREMENT = 1000
);








