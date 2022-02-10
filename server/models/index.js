const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

// db configurations
db.mongoose = mongoose;
db.url = dbConfig.url;

// db models
db.events = require("./event.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);

module.exports = db;
