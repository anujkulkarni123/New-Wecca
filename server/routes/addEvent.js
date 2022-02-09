const express = require('express');
const router = express.Router();

// import database items
const { connection } = require('../db');

// middleware to read post data
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

// router for adding an event
router.post('/', (req, res) => {
    // get the user input post data
    const { team, start, end, title, comment, allDay } = req.body;

    // validate the user input data
    if (!team || !start || !end || !title) {
        res.json({success: false, message: 'Invalid event details!'});
        return;
    }

    // create a js object using the new event details
    const newEvent = {
        team: team,
        start: new Date(start),
        end: new Date(end),
        title: title,
        comment: comment,
        allDay: allDay === 'true' ? true : false
    };

    // connect to the database
    connection.connectToServer((err) => {
        // handle error
        if (err)
            res.json({success: false, message: err.message});

        // insert the new event
        connection.getDB()
            .collection('events')
            .insertOne(newEvent, (err, response) => {
                // error response
                if (err) {
                    res.json({success: false, message: "Unable to register user!"});
                    return;
                }

                // success response
                res.json({success: true, message: "Successfully registered user!"});
            });
    });
});

// export the router
module.exports = router;
