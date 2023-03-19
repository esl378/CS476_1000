const jwt = require('jsonwebtoken');

//Used to block unauthorized access of protected pages
//Checks that whoever is trying to access the page/route 
//has a valid web token which means they are logged in as an admin
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