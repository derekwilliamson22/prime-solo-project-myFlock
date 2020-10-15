
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

-- Creating tables

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "coopName" VARCHAR NOT NULL,
  "firstName" VARCHAR NOT NULL,
  "lastName" VARCHAR NOT NULL,
  "username" VARCHAR UNIQUE NOT NULL,
  "password" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "zipcode" INT NOT NULL,
  "email" VARCHAR NOT NULL,
  "phone" VARCHAR NOT NULL,
  "authLevel" VARCHAR DEFAULT USER 
);

CREATE TABLE "coop" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "userId" INT references "user"
);

CREATE TABLE "chicken" (
   "id" SERIAL PRIMARY KEY,
   "name" VARCHAR NOT NULL,
   "breed" VARCHAR,
   "imageUrl" TEXT,
   "birthday" VARCHAR,
   "bio" TEXT,
   "coopId" INT references "coop"
);
 
CREATE TABLE "layingData" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE,
  "didLay" BOOLEAN,
  "chickenId" INT references "chicken"
);

CREATE TABLE "coopData" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE NOT NULL,
  "notes" VARCHAR,
  "isClean" BOOLEAN DEFAULT FALSE,
  "hasFood" BOOLEAN DEFAULT FALSE,
  "hasWater" BOOLEAN DEFAULT FALSE,
  "coopId" INT references "coop"
);

CREATE TABLE "serviceData" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE,
  "userId" INT references "user",
  "requestForFeed" BOOLEAN DEFAULT FALSE,
  "requestForCleaning" BOOLEAN DEFAULT FALSE,
  "otherNotes" VARCHAR,
  "didSendEmail" BOOLEAN DEFAULT FALSE,
  "sendEmailDate" DATE
);


CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "coopName" VARCHAR,
  "firstName" VARCHAR,
  "lastName" VARCHAR,
  "username" VARCHAR UNIQUE,
  "password" VARCHAR,
  "address" VARCHAR,
  "zipcode" VARCHAR,
  "email" VARCHAR,
  "phone" VARCHAR,
  "authLevel" VARCHAR DEFAULT USER 
);

CREATE TABLE "coop" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "userId" INT references "user"
);

CREATE TABLE "chicken" (
   "id" SERIAL PRIMARY KEY,
   "name" VARCHAR NOT NULL,
   "breed" VARCHAR,
   "imageUrl" TEXT,
   "birthday" VARCHAR,
   "bio" TEXT,
   "coopId" INT references "coop"
);
 
CREATE TABLE "layingData" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE,
  "didLay" BOOLEAN,
  "chickenId" INT references "chicken"
);

CREATE TABLE "coopData" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE NOT NULL,
  "notes" VARCHAR,
  "isClean" BOOLEAN DEFAULT FALSE,
  "hasFood" BOOLEAN DEFAULT FALSE,
  "hasWater" BOOLEAN DEFAULT FALSE,
  "coopId" INT references "coop"
);

CREATE TABLE "serviceData" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE,
  "userId" INT references "user",
  "requestForFeed" BOOLEAN DEFAULT FALSE,
  "requestForCleaning" BOOLEAN DEFAULT FALSE,
  "otherNotes" VARCHAR,
  "didSendEmail" BOOLEAN DEFAULT FALSE,
  "sendEmailDate" DATE
);

INSERT INTO "user" ("coopName", "firstName", "lastName", "username", "password", "address", "zipcode", "email", "phone")
VALUES ('logan', 'derek', 'coop', 'coop', 'coop', 'coop', 55431, 'coop', 'coop');