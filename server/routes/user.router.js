const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('this the req user', req.user);
  
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  console.log(req.body);
  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password, first_name, last_name, address, zipcode, email, phone, registration_date)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id;`;
    pool
    .query(queryText, [username, password, req.body.first_name, req.body.last_name, req.body.address, req.body.zipcode, req.body.email, req.body.phone, req.body.registration_date])
    .then(result => {
      console.log('New user Id:', result.rows[0].id);

      const createdUserId = result.rows[0].id

     
      const insertCoopNameAndUserIdQuery = `
      INSERT INTO "coop" ("name", "user_id")
      VALUES  ($1, $2);
      `
      
      pool.query(insertCoopNameAndUserIdQuery, [req.body.coop_name, createdUserId]).then(result => {
       
        res.sendStatus(201);
      }).catch(err => {
      
        console.log(err);
        res.sendStatus(500)
      })

    
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
});

router.get('/users', rejectUnauthenticated, (req, res) => {
  console.log('hit the registered users get');
  
  
})
// router.post('/register', (req, res, next) => {
//   const username = "coop";
//   const password = encryptLib.encryptPassword("coop");

//   const queryText = `INSERT INTO "user" (username, password)
//     VALUES ($1, $2) RETURNING id`;
//   pool
//     .query(queryText, [username, password])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
