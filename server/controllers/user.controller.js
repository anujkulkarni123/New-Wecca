const jwt = require('jsonwebtoken');
const { authSecret } = require('../config/db.config');
const db = require("../models");
const User = db.user;

// import hashing util
const { encryptPwd, comparePwd } = require('../util');

// Create and Save a new Event
exports.signUp = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password || !req.body.role)
    return res.status(400).send({ success: false, message: "Invalid Entries!" });

  encryptPwd(req.body.password, (err, password) => {
    if (err)
        return res.status(500).send({success: false, message: "An unexpected error occurred!"});

    // Create a User
    const user = new User({
      email: req.body.email.toString().toLowerCase(),
      password: password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role
    });

    User.find({email: req.body.email}).limit(1)
      .then((data) => {
        if (data[0])
          return res.status(300).send({message: "Email already in use!"});

      user.save(user)
        .then((data) => {
          jwt.sign({ user: { id: user.id } }, authSecret, { expiresIn: 3600 }, (err, token) => {
            // handle error
            if (err)
              return res.status(400).send({success: false, message: err.message || "Unexpected Error Occurred!"});

            res.cookie('token', token); // set the token

            res.status(200).send({
              success: true,
              message: "successfully created user!",
              data: data
            });
          });
        })
        .catch((err) => {
          res.status(400).send({success: false, message: err.message || "Unexpected Error Occurred!"});
        });
      })
      .catch((err) => {
        res.status(400).send({
          success: false,
          message: err.message || "Unexpected Error Occurred!"
        });
      });
  });
};

// Retrieve all Events from the database.
exports.logIn = (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(401).send({success: true, message: "Invalid Credentials!"});

  User.find({ email: req.body.email.toString().toLowerCase() }).limit(1)
    .then((data) => {
      if (data[0])
          comparePwd(req.body["password"], data[0].password, (err, isMatch) => { // compare the user input with the password from the database
              // send the error message in case an err was sent
              if (err)
                  return res.status(500).send({ success: false, message: err.message });

              // check and send appropriate response based on the isMatch value
              if (isMatch) {
                jwt.sign({ user: { id: data[0].id } }, authSecret, { expiresIn: 3600 }, (err, token) => {
                  if (err)
                    return res.status(500).send({success: false, message: err.message || "Unexpected Error Occurred!"});
                  res.cookie('token', token); // set the cookie
                  res.status(200).send({
                    success: true,
                    message: "Successfully logged in!",
                    data: data
                  });
                });
              }
              else
                  res.status(401).send({ success: false, message: "Invalid username and/or password!" })
          });
      else
        res.status(401).send({ success: false, message: "Invalid username and/or password!" })
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: err.message || "Unexpected Error Occurred!"
      });
    });
};
