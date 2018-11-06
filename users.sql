CREATE DATABASE MyDatabase;
use MyDatabase;

CREATE TABLE users (
    id int AUTO_INCREMENT PRIMARY KEY,
    username varchar(255),
    password varchar(255),
    fname varchar(255),
    lname varchar(255),
    street varchar(255),
    houseNr int,
    postCode int,
    placeOfRes varchar(255),
    dateOfBirth date,
    nat varchar(255),
    email varchar(255),
    mobNr int,
    ID1 varchar(255),
    ID2 varchar(255),
    regDate varchar(255),
    isComp int(1),
    active int(1) DEFAULT "0",
    privileges varchar(255) DEFAULT "user",
    isRegistered varchar(255) DEFAULT "no",
    compName varchar(255)
    regNr bigint,
    placeOfReg varchar(255),
    residence varchar(255),
    businessAd varchar(255),
    compHouseNr varchar(255),
    doc1 varchar(255),
    doc2 varchar(255),
 )

UPDATE users
SET role='admin'
WHERE username='Admin';