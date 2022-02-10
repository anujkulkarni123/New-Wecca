module.exports = app => {
    const { userController } = require("../controllers");

    var router = require("express").Router();

    // Create a new Event
    router.post("/signUp", userController.signUp);

    // Retrieve all Events
    router.post("/logIn", userController.logIn);

    // route for user
    app.use('/', router);
};
