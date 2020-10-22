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
   "chicken_image_url" TEXT,
   "chicken_egg_image_url" TEXT,
   "birthday" VARCHAR,
   "notes" TEXT,
   "coop_id" INT references "coop"
);
 
CREATE TABLE "layingData" (
  "id" SERIAL PRIMARY KEY,
  "date" VARCHAR,
  "didLay" INT,
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

-- select for laying data

SELECT "chicken"."name", "chicken"."coop_id", "layingData"."didLay" FROM "chicken"
JOIN "layingData"
ON "chicken"."id" = "layingData"."chicken_id"
JOIN "coop"
ON "coop"."id" = "chicken"."coop_id"
JOIN "user"
on "coop"."user_id" = "user"."id"
WHERE "layingData"."date" = 'October - 20 - 2020'
AND
"chicken"."coop_id" = 4;

-- beginning values for users
INSERT INTO "chicken" 
  ("name", "breed", "chicken_image_url", "chicken_egg_image_url", "birthday", "notes", "coop_id")
  VALUES ('Pancake', 'California White', 'images/california_white.png', 'images/california_white_egg.png', '2018-05-02', 'Once almost eaten by a fox. A bit of a bully.', 2);
  INSERT INTO "chicken" 
  ("name", "breed", "chicken_image_url", "chicken_egg_image_url", "birthday", "notes", "coop_id")
  VALUES ('Mabel', 'Goldstar', 'images/goldstar.jpg', 'images/goldstar_egg.png', '2018-05-02', 'Definitely a bully.', 2);
  INSERT INTO "chicken" 
  ("name", "breed", "chicken_image_url", "chicken_egg_image_url", "birthday", "notes", "coop_id")
  VALUES ('Norma', 'Barred Rock', 'images/barred_rock.jpg', 'images/barred_rock_egg.png', '2018-05-02', 'A sweet bird. Picked on for months. Full recovery.', 2);
  INSERT INTO "chicken" 
  ("name", "breed", "chicken_image_url", "chicken_egg_image_url", "birthday", "notes", "coop_id")
  VALUES ('Gertie', 'Black Australorp', 'images/black_australorp.jpg', 'images/australorp_egg.png', '2018-05-02', 'The Death Metal Hen', 2);
