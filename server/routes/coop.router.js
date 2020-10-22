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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
