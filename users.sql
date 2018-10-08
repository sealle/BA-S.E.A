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
    timeOfReg datetime,
    role varchar(255) DEFAULT 'user'
)

UPDATE users
SET role='admin'
WHERE username='Admin';