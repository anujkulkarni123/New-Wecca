const { auth } = require('../util');

module.exports = app => {
    const { eventController } = require("../controllers");

    var router = require("express").Router();

    // Create a new Event
    router.post("/", auth, eventController.create);

    // Retrieve all Events
    router.get("/", eventController.findAll);

    // Retrieve a single Event with id
    router.get("/:id", eventController.findOne);

    // Update an Event with id
    router.put("/:id", auth, eventController.update);

    // Delete an Event with id
    router.delete("/:id", auth, eventController.delete);

    // Delete all Events
    router.delete("/", auth, eventController.deleteAll);

    app.use('/api/events', router);
  };
