/* checks that the request is coming from an allowed source that is trusted*/
const allowedOrigins = require('../config/allowedOrigins');

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials;