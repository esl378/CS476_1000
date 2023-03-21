const User = require('../models/User');

const handleLogout = async (req, res) => {

    //retreive the cookie header from the request message
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.redirect('/') //not logged in, do nothing
    const refreshToken = cookies.jwt;

    // Is refresh token in db?
    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser){
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true});
        return res.sendStatus(204); 
    } 
    
    //Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);
    
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure:true});
    res.clearCookie('jwt_access', { httpOnly: true, sameSite: 'None', secure:true});
    res.redirect('/');
    
}

module.exports = { handleLogout }
