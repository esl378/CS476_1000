const jwt = require('jsonwebtoken');


const authCheck = (req, res, next) => {
    const cookies = req.cookies;
    if(!cookies?.jwt_access) return res.redirect('/login'); //No content to send back
    
    console.log(cookies.jwt_access); //Form of: 'Bearer Token'
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

module.exports = authCheck;