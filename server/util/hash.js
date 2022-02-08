// import module for hashing
const bcrypt = require('bcrypt');

// function to encrypt password
function encryptPwd(password, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        // return the callback function with error
        if (err)
            return callback(err);

        // hash the password given if there were no issues with the salt
        bcrypt.hash(password, salt, (err, hash) => {
            return callback(err, hash);
        });
    });
}

// function to decrypt the password from the user
function comparePwd(plainPwd, hashedPwd, callback) {
    // call the compare function from bcrypt to compare it to the user input
    bcrypt.compare(plainPwd, hashedPwd, (err, isMatch) => {
        // return the callback with or without the err to determine if the compare succeeded
        return err == null ? callback(null, isMatch) : callback(err);
    });
}

// export the functions
module.exports = {
    encryptPwd: encryptPwd,
    comparePwd: comparePwd
}

