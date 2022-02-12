// import the utils
const { encryptPwd, comparePwd } = require('./hash');
const auth = require('./auth');

// export the route
module.exports = {
    encryptPwd,
    comparePwd,
    auth
};
