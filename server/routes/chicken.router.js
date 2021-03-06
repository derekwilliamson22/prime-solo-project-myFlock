const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const queryString = `
  SELECT "chicken"."id" as chickenId,
  "chicken"."name",
  "chicken"."breed",
  "chicken"."chicken_image_url",
  "chicken"."chicken_egg_image_url",
  "chicken"."notes",
  "chicken"."birthday",
  "coop"."id" as coopId
  FROM "chicken"
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

router.post('/dailyData', rejectUnauthenticated, (req, res) => {
  console.log('what is the post add daily data', req.body);
  const queryString = `
  INSERT INTO "layingData"
  ("date", "didLay", "chicken_id")
  VALUES ($1, $2, $3);`;
  pool.query(queryString, [req.body.date, req.body.didLay, req.body.chicken_id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('error in posting laying data', err);
    res.sendStatus(500);
  });
})


router.get('/layingData', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log("What is my laying data :", req.query);
  const queryString = `SELECT "chicken"."name", "chicken"."chicken_egg_image_url", "chicken"."id", "layingData"."date", "layingData"."didLay" FROM "chicken"
  JOIN "layingData"
  ON "chicken"."id" = "layingData"."chicken_id"
  JOIN "coop"
  ON "coop"."id" = "chicken"."coop_id"
  JOIN "user"
  on "coop"."user_id" = "user"."id"
  WHERE "layingData"."date" = $1
  AND
  "chicken"."coop_id" = $2
  ORDER BY "layingData"."chicken_id";`;
  pool.query(queryString, [req.query.date, req.query.coop_id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in GETting chickens laying data', err);
      res.sendStatus(500);
    });
});

router.post('/laying/add', rejectUnauthenticated, (req, res) => {
  console.log('what is the post add egg', req.body);
  const queryString = `
  INSERT INTO "layingData"
  ("date", "didLay", "chicken_id")
  VALUES ($1, $2, $3);`;
  pool.query(queryString, [req.body.date, req.body.didLay, req.body.chicken_id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('error in posting laying data', err);
    res.sendStatus(500);
  });
})

router.delete('/laying/remove', rejectUnauthenticated, (req,res) => {
console.log('what is the delete egg', req.body);
const queryString = `
DELETE FROM "layingData"
WHERE "date" = $1
AND "chicken_id" = $2;`;
pool.query(queryString, [req.body.date, req.body.chicken_id])
.then((result) => {
  res.send(result.rows);
}).catch(err => {
  console.log('got an error in DELETE', err);
  res.sendStatus(500);
})

});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('what is the post add chicken', req.body);
  const queryString = `
  INSERT INTO "chicken" 
  ("name", "breed", "chicken_image_url", "chicken_egg_image_url", "birthday", "notes", "coop_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  const queryParams = [
    req.body.chicken_name,
    req.body.breed,
    req.body.chicken_image_url,
    req.body.chicken_egg_image_url,
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

router.put('/details/:id',rejectUnauthenticated, (req, res) => {
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

router.get('/details/:id', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log("What happened to my get details request?:", req.body, req.params.id);
  const queryString = `SELECT "chicken"."id", "chicken"."name", "chicken"."breed", "chicken"."chicken_image_url", "chicken"."chicken_egg_image_url", "chicken"."notes", "chicken"."birthday" FROM "chicken"
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

router.delete('/:id', rejectUnauthenticated, (req,res) => {
  console.log('what is the delete chicken', req.params);
  queryText = `
  DELETE FROM "chicken"
  WHERE "id" = $1;`;
  pool
  .query(queryText, [req.params.id])
  .then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('got an error in DELETE', err);
    res.sendStatus(500);
  });
});  

  router.get('/data',rejectUnauthenticated, (req,res) => {
    console.log('What is my data :', req.query);
    const queryString = `SELECT "chicken"."name", "chicken"."id", SUM("didLay") FROM "chicken"
    JOIN "layingData"
    ON "chicken"."id" = "layingData"."chicken_id"
    JOIN "coop"
    ON "coop"."id" = "chicken"."coop_id"
    JOIN "user"
    ON "coop"."user_id" = "user"."id"
    WHERE "chicken"."coop_id" = $1
    AND
    "date" BETWEEN $2 AND $3
    GROUP BY "chicken"."id";`;
    pool.query(queryString, [req.query.coopId, req.query.newDate, req.query.previousDate])
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('error in GETting chickens laying data', err);
        res.sendStatus(500);
      });
  });
  




module.exports = router;