PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS PEOPLE;
DROP TABLE IF EXISTS DONATIONS;

CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    address VARCHAR(300)
);

CREATE TABLE donations(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    people_id INTEGER,
    donation_date INTEGER,
    party INTEGER,
    FOREIGN KEY (people_id) REFERENCES people(id) ON DELETE CASCADE
);

INSERT INTO people
VALUES (1, 'person2', '213 stuopidas lasne'),
        (2, 'asbas', '213 asdasd st'),
        (3, 'teber', '213 stfgdfgd dr'),
        (4, 'lasqux', '213 ssadasd way'),
        (5, 'pokern', '213 stuasdadas st');

INSERT INTO donations (people_id, donation_date, party)
    VALUES(1, 100, 1),
        (1,120, 1),
        (2,200,-1),
        (3,300,-1),
        (4,500, 1),
        (2, 600, -1);
