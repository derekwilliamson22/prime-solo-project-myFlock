# PROJECT NAME
myFlock

## Description

_Duration: Two Week Sprint_

myFlock is a mobile-optimized app for users to track their backyard chickens laying habits and well-being. There is also a customer service portal to communicate their needs to a business, Northern Flock, that uses myFlock to connect and provide chicken keeping services to their customers.

To see the fully functional site, please visit: <<FORTHCOMING>> [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [React] (https://reactjs.org)
- React-Redux
- Redux-Saga
- Material UI
- PostGreSQL

### Installation

## Database Setup

1. Create a database named `my_flock`
2. Run the queries from file `database.sql` on the `my_flock` database.
3. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

## Install Dependencies

1. Open up your editor of choice and run an `npm install`
2. Run `npm run server` in your terminal
3. Run `npm run client` in your terminal
4. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. New Users should register themselves as a myFlock user.
2. Registered Users should login with their usernames and passwords.
3. Upon logging in, users will be directed to the "myCoop" view. This is where they can add
   chickens from their backyard flock. Users can click on a previously added chicken to see their specific details. Users also have an opportunity to edit their chickens information. If need be, they can remove the chicken as well. Removing the chicken deletes the chicken from the database. 
4. The Daily Dashboard view will initially present the user with the current days date. The user can
   switch to a previous day in order to see who has laid an egg, or add an egg if necessary.
5. The myStats view shows the user a collection of data that shows how many eggs each chicken has laid
   in the last 6 months.
6. The Service view gives the user an opportunity to request services related to chicken keeping. This
   information is available to an ADMIN only to schedule delivery of those services.


## Built With

- [Node.js](https://nodejs.org/en/)
- [React] (https://reactjs.org)
- React-Redux
- Redux-Saga
- Material UI
- PostGreSQL

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality, especially my Instructors [Edan Schwartz](https://github.com/eschwartz) and [dEv](https://github.com/devjanaprime) 

## Support
If you have suggestions or issues, please email me at [derekwilliamson22@gmail.com](www.google.com)
