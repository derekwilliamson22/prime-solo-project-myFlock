const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  console.log("What are my body and params?:", req.body, req.params.id);
  const queryString = `SELECT * FROM "coop" WHERE "user_id" = $1;`;
  pool.query(queryString, [req.params.id])
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
