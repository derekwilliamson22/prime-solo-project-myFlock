const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  // GET route code here
  console.log("What are my body and params?:", req.body, req.params.id);
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

module.exports = router;