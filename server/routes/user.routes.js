module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new Event
    router.post("/signUp", user.signUp);

    // Retrieve all Events
    router.post("/logIn", user.logIn);

    // route for user
    app.use('/', router);
};
