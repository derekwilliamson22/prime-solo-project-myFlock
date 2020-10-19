const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  console.log("What is my req.user:", req.user);
  const queryString = `
  SELECT "chicken"."id", "chicken"."name", "chicken"."breed", "chicken"."image_url", "chicken"."notes", "chicken"."birthday" FROM "chicken"
  JOIN "coop"
  ON "coop"."id" = "chicken"."coop_id"
  JOIN "user"
  ON "coop"."user_id" = "user"."id"
  WHERE "user"."id" = $1
  ORDER BY "chicken"."id" ASC;`;
  pool.query(queryString, [req.user.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in GETting chickens', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('what is the post add chicken', req.body);
  const queryString = `
  INSERT INTO "chicken" 
  ("name", "breed", "image_url", "birthday", "notes", "coop_id")
  VALUES ($1, $2, $3, $4, $5, $6);`;
  const queryParams = [
    req.body.chicken_name,
    req.body.breed,
    req.body.image_url,
    req.body.birthday,
    req.body.notes,
    req.body.coop_id
  ]
  pool.query(queryString, queryParams)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in POSTing chicken', err);
      res.sendStatus(500);
    });
})

router.put('/details/:id', (req, res) => {
  console.log('what is the put', req.body, req.params.id);
  const queryString = `
  UPDATE "chicken" 
  SET 
  "name" = $2,
  "breed" = $3,
  "birthday" = $4,
  "notes" = $5 
  WHERE "id" = $1;`;
  const queryParams = [
    req.params.id,
    req.body.chicken_name,
    req.body.breed,
    req.body.birthday,
    req.body.notes,
  ]
  pool.query(queryString, queryParams)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in POSTing chicken', err);
      res.sendStatus(500);
    });
})

router.get('/details/:id', (req, res) => {
  // GET route code here
  console.log("What happened to my get details request?:", req.body, req.params.id);
  const queryString = `SELECT "chicken"."id", "chicken"."name", "chicken"."breed", "chicken"."image_url", "chicken"."notes", "chicken"."birthday" FROM "chicken"
  JOIN "coop"
  ON "coop"."id" = "chicken"."coop_id"
  JOIN "user"
  ON "coop"."user_id" = "user"."id"
  WHERE "chicken"."id" = $1;`;
  pool.query(queryString, [req.params.id])
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('error in GETting chicken details', err);
      res.sendStatus(500);
    });
});




module.exports = router;