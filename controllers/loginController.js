const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { userName, userPassword } = req.body;
    if(!userName || !userPassword) return res.status(400).json({ 'message': 'Username and password are required'});
    const foundUser = await User.findOne({uid: userName}).exec();
    if(!foundUser) return res.render(__dirname + "/../views/login.html", {userField:'User not found'});
    //evaluate password
    const match = await bcrypt.compare(userPassword, foundUser.pass);
    
    
    if(match){
        //create JWT -> JSON Web Tokens
        const accessToken = jwt.sign(
            {"username": foundUser.uid}, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: '1hr' }
        );
        const refreshToken = jwt.sign(
            {"username": foundUser.uid}, 
            process.env.REFRESH_TOKEN_SECRET, 
            { expiresIn: '1d' }
        );
        // Saving refresh token with the current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        

        res.cookie('jwt', refreshToken, { maxAge: 60 * 60 * 1000, httpOnly: true }); //MUST ADD BEFORE DEPLOYMENT: secure: true , { httpOnly: true, maxAge: 24 * 60 * 60 * 1000}
        res.cookie('jwt_access', accessToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
        
        res.redirect('/maintenance');
    } else{
        return res.render(__dirname + "/../views/login.html", {userName:foundUser.uid,passwordField:'Password did not match'});
    }
}

module.exports = { handleLogin };