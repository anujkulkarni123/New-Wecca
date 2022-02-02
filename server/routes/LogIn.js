const express = require('express');
const router = express.Router();

// import database items
const { connection } = require('../db');

// middleware to parse post body
router.use(express.urlencoded({
    extended: true
}));

// route to login user
router.post('/', (req, res) => {
    connection.connectToServer("sample", (err) => {
        if (err)
            res.json({success: false, message: err.message});

        // code for testing purposes
        connection.getDB()
            .collection('users')
            .find({}).limit(1)
            .toArray((err, results) => {
                if (err)
                    res.json({success: false, message: err.message});

                if (req.body["email"] === results[0]["email"] && req.body["password"] === results[0]["password"])
                    res.json({success: true, message: "Login Successful"});
                else
                    res.json({ success: false, message: "Login Unsuccessful!" })
            });
    });
});

// export the router
module.exports = router;
