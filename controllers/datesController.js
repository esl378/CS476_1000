const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleAddYear = async (req, res) => {

    const requestReceiver = req.body;

    const semestersList = requestReceiver.semesters;
    const yearsList = requestReceiver.year;
    const eventsList = requestReceiver.events;

    try{
        const result1 = await Event.insertMany(eventsList);
        const result2 = await Semester.insertMany(semestersList);
        const result3 = await Year.insertMany(yearsList);

        res.status(201).json({'success': `Added events ${result1}\n Added semesters ${result2}\n Added years ${result3}`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

const handleGetEvents = async (req, res) => {
    const { description, strtDate, endDate, year, semester } = req.body;
    
    const event = await Event.find().exec();
    
    try{
        console.log(event);
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

/* const handleGetYears = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});

    //check for duplicate usernames in DB
    const duplicate = await User.findOne({uid: user}).exec();
    if(duplicate) return res.sendStatus(409); //conflict
    try{
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //Create and store the new user
       const result = await User.create({
            "uid": user,
            "pass": hashedPwd
       });

       console.log(result);
        res.status(201).json({'success': `New user ${user} created!`});
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handleGetSemesters = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});

    //check for duplicate usernames in DB
    const duplicate = await User.findOne({uid: user}).exec();
    if(duplicate) return res.sendStatus(409); //conflict
    try{
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //Create and store the new user
       const result = await User.create({
            "uid": user,
            "pass": hashedPwd
       });

       console.log(result);
        res.status(201).json({'success': `New user ${user} created!`});
    } catch(err){
        res.status(500).json({'message': err.message});
    }
} */

module.exports = {handleAddYear, handleGetEvents};