require('dotenv').config(); // import the environment variables
const { MongoClient } = require('mongodb');

// variables for creating the db connection
const connectionString = process.env.MONGO_URL;
const database = process.env.MONGO_DB;

// create the client
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// keep track of the db connection
let dbConnection;

// function to connect to the mongodb server
function connectToServer(callBack) {
    client.connect((err, db) => {
        if (err || !db)
            return callBack(err);

        // get the database connection
        dbConnection = db.db(database);
        console.log('connection to MongoDB successful');

        return callBack();
    })
};

// export the required functions
module.exports = {
    connectToServer: connectToServer,
    getDB: () => {
        return dbConnection;
    }
};
