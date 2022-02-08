const express = require('express');
const router = express.Router();

// import database items
const { connection } = require('../db');

// import hash util
const { encryptPwd } = require('../util');

// middleware to read post data
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

// router for signing up a user
router.post('/', (req, res) => {
    connection.connectToServer((err) => {
        if (err)
            res.json({success: false, message: err.message});

        // validate the user inputs
        connection.getDB()
            .collection('users')
            .find({email: req.body["email"]}).limit(1)
            .toArray((err, results) => {
                // handle error
                if (err)
                    res.json({success: false, message: "UAE : An unexpected error occurred!"});

                // handle email already exist
                if (results[0])
                    res.json({success: false, message: "Email already in use!"});
                else
                    encryptPwd(req.body.password, (err, password) => { // encrypt the password and do user insert in the callback
                        // handle error
                        if (err) {
                            res.json({success: false, message: "UEP : An unexpected error occurred!"});
                            return;
                        }

                        // create a js object using the new user details
                        const newUser = {
                            email: req.body.email,
                            password: password,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            role: req.body.role
                        }

                        // insert the new user
                        connection.getDB()
                            .collection('users')
                            .insertOne(newUser, (err, response) => {
                                // error response
                                if (err)
                                    res.json({ success: false, message: "Unable to register user!" });

                                // success response
                                res.json({ success: true, message: "Successfully registered user!" });
                            });
                    });
            });
    });
});

// export the router
module.exports = router;
