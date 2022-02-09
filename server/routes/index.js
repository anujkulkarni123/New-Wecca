// import the routes
const signUpUser = require('./signUpUser');
const logInUser = require('./logInUser');
const getEvents = require('./getEvents');
const addEvent = require('./addEvent');

// export the routes
module.exports = {
    signUpUser,
    logInUser,
    getEvents,
    addEvent
};
