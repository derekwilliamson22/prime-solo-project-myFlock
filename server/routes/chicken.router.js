const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  // GET route code here
  console.log("What happened to my get request?:", req.body, req.params.id);
  const queryString = `SELECT * FROM "chicken" WHERE "coopId" = $1;`;
  pool.query(queryString, [req.params.id])
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
  ("name", "breed", "imageUrl", "birthday", "bio", "coopId")
  VALUES ($1, $2, $3, $4, $5, $6);`;
  const queryParams = [
    req.body.chickenName,
    req.body.breed,
    req.body.imageUrl,
    req.body.birthday,
    req.body.bio,
    req.body.coopId
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

module.exports = router;