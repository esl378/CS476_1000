const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required'});
    const foundUser = await User.findOne({uid: user}).exec();
    if(!foundUser) return res.status(401).json({'message': "username bad"}); //Unauthorized
    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.pass);
    
    
    if(match){
        //create JWT -> JSON Web Tokens
        const accessToken = jwt.sign(
            {"username": foundUser.username}, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: '15m' }
        );
        const refreshToken = jwt.sign(
            {"username": foundUser.username}, 
            process.env.REFRESH_TOKEN_SECRET, 
            { expiresIn: '1d' }
        );
        // Saving refresh token with the current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000}); //MUST ADD BEFORE DEPLOYMENT: secure: true
        res.json({ accessToken });
    } else{
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };