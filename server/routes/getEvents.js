const express = require('express');
const router = express.Router();

// import database items
const { connection } = require('../db');

// route to get all the events
router.get('/', (req, res) => {
    // connect to the database
    connection.connectToServer((err) => {
        // handle error
        if (err) {
            res.json({success: false, message: err.message, data: []});
            return;
        }

        // insert the new event
        connection.getDB()
            .collection('events')
            .find({}).toArray((err, results) => {
                // error response
                if (err) {
                    res.json({success: false, message: "Unable to register user!", data: []});
                    return;
                }

                // success response
                res.json({success: true, message: "Successfully got events!", data: results});
            });
    });
});

// export the router
module.exports = router;
