const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) {this.users = data}
}
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required'});
    const foundUser = usersDB.users.find(person => person.username === user);
    if(!foundUser) return res.status(401).json({'message': "username bad"}); //Unauthorized
    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    console.log(foundUser.password);
    
    if(match){
        //create JWT -> JSON Web Tokens
        res.json({'Success': `user ${user} is logged in!` });
    } else{
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };