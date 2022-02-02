const express = require('express');
const router = express.Router();

// import database items
const { connection } = require('../db');

// middleware to read post data
router.use(express.urlencoded({
    extended: true
}));

// router for signing up a user
// TODO --> convert to post method
router.post('/', (req, res) => {
    connection.connectToServer("sample", (err) => {
        if (err)
            res.json({success: false, message: err.message});

        // TODO --> input validation

        newUser = {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }

        // insert a new user
        connection.getDB()
            .collection('users')
            .insertOne(newUser, (err, res) => {
                // TODO --> handle errors properly
                if (err)
                    throw err;
            })
    });

});

// export the route
module.exports = router;
