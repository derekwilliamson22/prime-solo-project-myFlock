const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const queryString = `SELECT * FROM "coop" WHERE "user_id" = $1;`;
  pool.query(queryString, [req.user.id])
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('error in GETting coop', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/service', rejectUnauthenticated, (req, res) => {
  console.log('what is the post service', req.body);
  const queryString = `
  INSERT INTO "chicken" 
  ("date", "user_id", "requestForFeed", "requestForCleaning", "otherNotes")
  VALUES ($1, $2, $3, $4, $5);`;
  const queryParams = [
    req.body.date,
    req.body.user_id,
    req.body.requestForFeed,
    req.body.requestForCleaning,
    req.body.otherNotes,
  ]
  pool.query(queryString, queryParams)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in POSTing service', err);
      res.sendStatus(500);
    });
});

module.exports = router;
