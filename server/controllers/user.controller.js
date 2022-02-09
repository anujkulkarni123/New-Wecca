const db = require("../models");
const User = db.user;

// import hashing util
const { encryptPwd, comparePwd } = require('../util');

// Create and Save a new Event
exports.signUp = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password || !req.body.role) {
    res.status(400).send({ message: "Invalid Entries!" });
    return;
  }

  encryptPwd(req.body.password, (err, password) => {
    if (err) {
        res.status(500).send({success: false, message: "An unexpected error occurred!"});
        return;
    }

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
        if (data[0]) {
          res.status(300).send({message: "Email already in use!"});
          return;
        }

      user.save(user)
        .then((data) => {
          res.status(200).send({ message: "successfully created user!", data: data });
        })
        .catch((err) => {
          res.status(400).send({
            message: err.message || "Unexpected Error Occurred!"
          });
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Unexpected Error Occurred!"
        });
      });
  });
};

// Retrieve all Events from the database.
exports.logIn = (req, res) => {
  User.find({ email: req.body.email.toString().toLowerCase() }).limit(1)
    .then((data) => {
      if (data[0])
          comparePwd(req.body["password"], data[0].password, (err, isMatch) => { // compare the user input with the password from the database
              // send the error message in case an err was sent
              if (err) {
                  res.status(500).send({ success: false, message: err.message });
                  return;
              }

              // check and send appropriate response based on the isMatch value
              if (isMatch)
                  res.status(200).send({success: true, message: "Login Successful"});
              else
                  res.status(400).send({ success: false, message: "Invalid username and/or password!" })
          });
      else
        res.status(400).send({ success: false, message: "Invalid username and/or password!" })
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "Unexpected Error Occurred!"
      });
    });
};
