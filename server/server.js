const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// import express
const app = express();

// import the routes
const { user, events } = require('./routes');

// cors
var corsOptions = {
  origin: "http://localhost:4200",
  credentials: true
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse cookies from requests
app.use(cookieParser());

// connect to the db
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err.message);
    process.exit();
  });

// add the routes
user(app);
events(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
