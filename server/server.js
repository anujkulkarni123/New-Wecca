const express = require('express');
const app = express();

/*
 * add more routes by creating the necessary js file in the routes folder
 * update the index.js file in the routes folder to be able to import the route in the line below
*/
// import the routes
const { signUpUser, logInUser } = require('./routes');

// constant variables for the server
const PORT = 80;

// set the paths for each of the imported routes
app.get('/', (req, res) => { res.send('Server Working...') } ); // TODO --> remove before production (only for testing purposes)
app.use('/signUp', signUpUser);
app.use('/logIn', logInUser);

// start the server
app.listen(PORT, () => {
    console.log(`server started on http://localhost${PORT !== 80 ? ('/' + PORT) : ''}`);
});
