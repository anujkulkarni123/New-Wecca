const jwt = require('jsonwebtoken');

// middleware to check if the author has been authenticated
function auth(req, res, next) {
    const token = req.header("token");

    // if the token is not given
    if (!token) return res.status(300).send({ success: false, message: "Authorization Error!" });

    try {
        const decoded = jwt.verify(token, "randomWord"); // decode the jwt
        req.user = decoded.user; // send the userID to the next request
        next();
    } catch (e) {
        res.status(500).send({ success: false, message: "Invalid Token!" });
    }
}

module.exports = auth;
