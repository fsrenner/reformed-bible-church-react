insert into home_data (
    jumbotron,
    welcome,
    biblestudytime,
    worshiptime,
    locationstreet,
    locationcity,
    googlemapurl
) values (
    'We exist to bring glory to God through the Lord Jesus Christ by the power of the Holy Spirit',
    'Thank you for checking out Reformed Bible Church! We are a gathering of believers who live in the Branson-Table Rock Lake area who are committed to glorifying God, and exalting our Lord and Savior, Jesus Christ, according to the protestant, reformed tradition of the Christian faith. We are glad that you stopped by and hope you see what Reformed Bible Church is all about.',
    '2021-04-11 09:45:00',
    '2021-04-11 10:45:00',
    '280 Old Still Rd',
    'Kimberling City, MO 65686',
    'https://goo.gl/maps/TWWNN8Qij1n7BYWc9'
);

INSERT INTO home_data_expectations(
    expectation,
    homedataid
) VALUES (
    'A modest gathering: we are a newly formed church',
    1
);

CREATE TABLE beliefs_data (
    id int not null auto_increment,
    mission varchar(1020)
    primary key (id)
);

CREATE TABLE beliefs_data_reformed (
    id int not null auto_increment,
    paragraph varchar(1020),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_solas (
    id int not null auto_increment,
    lead varchar(1020),
    title varchar(50),
    content varchar (520)
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_confessional (
    id int not null auto_increment,
    paragraph varchar(1020),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_covenental (
    id int not null auto_increment,
    paragraph varchar(1020),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_means (
    id int not null auto_increment,
    paragraph varchar(1020),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_family (
    id int not null auto_increment,
    paragraph varchar(1020),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_beliefs (
    id int not null auto_increment,
    paragraph varchar(1020),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

CREATE TABLE beliefs_data_beliefs (
    id int not null auto_increment,
    lead varchar(1020),
    [url] varchar(50),
    [text] varchar (520),
    beliefsdataid int,
    primary key (id),
    foreign key (beliefsdataid) references beliefs_data(id)
);

insert into beliefs_data_family (paragraph)
values('We teach parents to evangelize and disciple their children and their neighbors. We emphasize the ministry of hospitality, family worship, catechism, and family discipleship. Instead of placing the burden on paid professionals to “do the work of the ministry,” we equip the saints to do it.');

insert into beliefs_data_beliefs (
    lead,
    url,
    text,
    beliefsdataid
) values (
    'We subscribe to the following confessions and doctrinal statements',
    'https://defendinginerrancy.com/chicago-statements/',
    'The Scriptural Inerrancy and Biblical Hermeneutics',
    1
);

create table leadership_data (
    id int not null auto_increment,
    government varchar(1020),
    elder varchar(1020),
    deacon varchar(1020),
    primary key (id)
);

insert into leadership_data (
    government,
    elder,
    deacon,
) values (
    'Our form of government is presbyterian in nature. The Greek word presbuterus is the most used term for elder in the New Testament. Therefore, we are an elder governed church.',
    'Paul emphasized a plurality of elders in the early church (Titus 1:5; Acts 20: 17).  We believe multiple elders are necessary for accountability in morality, accountability in teaching the Truth of Scripture, shared leadership to avoid burnout, shared responsibility for church discipline, as well as many other benefits for the local congregation.  Church leadership should not rest on the decisions of one man.  An elder is a biblically qualified man who has been nominated, trained, examined, and ordained to see to the affairs of the church.  Scripture gives explicit qualifications for an elder (I Timothy 3: 1-7).',
    'Deacon means, literally, “one who waits on tables”.  Acts 6 records the Apostles appointing the first deacons so they could better attend to prayer and the ministry of The Word.  A deacon is a biblically qualified man who has been nominated, trained, examined, and ordained to minister to the physical needs of the church.  Scripture gives explicit qualifications for deacons (I Timothy 3: 8-13).'
);

CREATE TABLE leadership_data_leaders (
    id int not null auto_increment,
    title varchar(255),
    name varchar(255),
    image varchar(510),
    leadershipdataid int,
    primary key (id),
    foreign key (leadershipdataid) references leadership_data(id)
);

insert into leadership_data_leaders (title, name, image) values ('Deacon, Finances', 'Chris Baker', './resources/blank-person.png');

CREATE TABLE admins_data (
    id int not null auto_increment,
    username varchar(100)
    password varchar(100)
    primary key (id)
);