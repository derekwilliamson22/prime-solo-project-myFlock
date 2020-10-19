CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR,
  "last_name" VARCHAR,
  "username" VARCHAR UNIQUE,
  "password" VARCHAR,
  "address" VARCHAR,
  "zipcode" VARCHAR,
  "email" VARCHAR,
  "phone" VARCHAR,
  "registration_date" VARCHAR,
  "authLevel" VARCHAR DEFAULT 'user' 
);

CREATE TABLE "coop" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR,
  "user_id" INT references "user"
);

CREATE TABLE "chicken" (
   "id" SERIAL PRIMARY KEY,
   "name" VARCHAR NOT NULL,
   "breed" VARCHAR,
   "image_url" TEXT,
   "birthday" VARCHAR,
   "notes" TEXT,
   "coop_id" INT references "coop"
);
 
CREATE TABLE "layingData" (
  "id" SERIAL PRIMARY KEY,
  "date" VARCHAR,
  "didLay" BOOLEAN,
  "chicken_id" INT references "chicken"
);

CREATE TABLE "coopData" (
  "id" SERIAL PRIMARY KEY,
  "date" VARCHAR NOT NULL,
  "notes" VARCHAR,
  "isClean" BOOLEAN DEFAULT FALSE,
  "hasFood" BOOLEAN DEFAULT FALSE,
  "hasWater" BOOLEAN DEFAULT FALSE,
  "coop_id" INT references "coop"
);

CREATE TABLE "serviceData" (
  "id" SERIAL PRIMARY KEY,
  "date" VARCHAR,
  "user_id" INT references "user",
  "requestForFeed" BOOLEAN DEFAULT FALSE,
  "requestForCleaning" BOOLEAN DEFAULT FALSE,
  "otherNotes" VARCHAR,
  "didSendEmail" BOOLEAN DEFAULT FALSE,
  "sendEmailDate" VARCHAR
);


-- select for GET CHICKEN DETAILS
SELECT "chicken"."id", "chicken"."name", "chicken"."breed", "chicken"."image_url", "chicken"."notes", "chicken"."birthday" FROM "chicken"
  JOIN "coop"
  ON "coop"."id" = "chicken"."coop_id"
  JOIN "user"
  on "coop"."user_id" = "user"."id"
  WHERE "chicken"."id" = $1;
  
  -- select for GET CHICKENS
  SELECT "chicken"."id", "chicken"."name", "chicken"."breed", "chicken"."image_url", "chicken"."notes", "chicken"."birthday" FROM "chicken"
  JOIN "coop"
  ON "coop"."id" = "chicken"."coop_id"
  JOIN "user"
  on "coop"."user_id" = "user"."id"
  WHERE "user"."id" = $1
  ORDER BY "chicken"."id" ASC;