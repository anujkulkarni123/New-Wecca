const jwt = require('jsonwebtoken');

// config
const { authSecret } = require('../config/db.config');

// middleware to check if the author has been authenticated
function auth(req, res, next) {
    // access the cookie for the token
    const token = req.cookies.token;

    // if the token is not given
    if (!token) return res.status(300).send({ success: false, message: "Authorization Error!" });

    try {
        const decoded = jwt.verify(token, authSecret); // decode the jwt
        req.user = decoded.user; // send the userID to the next request
        next();
    } catch (e) {
        res.status(500).send({ success: false, message: "Invalid Token!" });
    }
}

module.exports = auth;
