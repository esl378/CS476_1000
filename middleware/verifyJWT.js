const jwt = require('jsonwebtoken');


const verifyJWT = (req, res, next) => {
    const cookies = req.cookies;
    if(!cookies?.jwt_access) return res.redirect('/login');
    
    const token = cookies.jwt_access;
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET, 
        (err, decoded) => {
            if(err) return res.sendStatus(403); //invalid token
            req.user = decoded.username;
            next();
        }
    );
}

module.exports = verifyJWT;