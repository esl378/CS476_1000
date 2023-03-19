const User = require('../models/User');
const jwt = require('jsonwebtoken');

//if access token is expired renew it 
const handleRefreshToken = async (req, res) => {
    //obtain cookie header from request message
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401); //not logged in do nothing
    
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken}).exec();
    if(!foundUser) return res.sendStatus(403); //Forbidden
    //evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                {   "UserInfo": {
                        "uid": decoded.username,

                    }

                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '15m'}
            );
            res.json({ accessToken })
        }
    );   
    
}

module.exports = { handleRefreshToken }