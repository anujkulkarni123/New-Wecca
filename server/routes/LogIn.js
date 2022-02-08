const express = require('express');
const router = express.Router();

// import database items
const { connection } = require('../db');

// import hashing util
const { comparePwd } = require('../util');

// middleware to parse post body
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

// route to login user
router.post('/', (req, res) => {
    connection.connectToServer((err) => {
        if (err)
            res.json({success: false, message: err.message});

        // fetch data from the db for the email given
        connection.getDB()
            .collection('users')
            .find({ "email": req.body["email"] }).limit(1)
            .toArray((err, results) => {
                if (err)
                    res.json({success: false, message: err.message});

                // compare the user input with the password from the database
                comparePwd(req.body["password"], results[0].password, (err, isMatch) => {
                    // send the error message in case an err was sent
                    if (err)
                        res.json({ success: false, message: err.message });

                    // check and send appropriate response based on the isMatch value
                    if (isMatch)
                        res.json({success: true, message: "Login Successful"});
                    else
                        res.json({ success: false, message: "Login Unsuccessful! Please enter valid credentials." })
                });

            });
    });
});

// export the router
module.exports = router;
