create table assigment
(
  aid         varchar(10)   null,
  cid         varchar(10)   null,
  aname       varchar(100)  null,
  description varchar(1000) null,
  duedate     varchar(100)  null
);

create table course_materials
(
  week         varchar(50)  null,
  lecture      varchar(500) null,
  homework     varchar(500) null,
  tute         varchar(500) null,
  `references` varchar(500) null,
  assigment    varchar(500) null
);

create table courseoutline
(
  id            varchar(10)  null,
  courseOutline varchar(100) null
);

create table lectures
(
  aid      varchar(10)  null,
  fname    varchar(50)  null,
  lname    varchar(50)  null,
  position varchar(50)  null,
  bday     varchar(50)  null,
  address  varchar(50)  null,
  phone    varchar(10)  null,
  email    varchar(100) null,
  password varchar(20)  null
);


create table new_course
(
  file_upload varchar(1000) null,
  id          varchar(10)   null,
  name        varchar(200)  null,
  free        varchar(20)   null,
  seat        int           null,
  schedule    varchar(100)  null,
  period      varchar(100)  null,
  description varchar(2000) null,
  outcome     varchar(2000) null,
  audience    varchar(2000) null
);


create table student
(
  sid      varchar(10)  null,
  fname    varchar(50)  null,
  lname    varchar(50)  null,
  bday     varchar(20)  null,
  address  varchar(50)  null,
  phone    varchar(10)  null,
  email    varchar(100) null,
  password varchar(20)  null
);


create table studentassigment
(
  aid         varchar(10)   null,
  systemDate  varchar(50)   null,
  sid         varchar(10)   null,
  sname       varchar(50)   null,
  cid         varchar(10)   null,
  file_upload varchar(1000) null
);
