const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleAddYear = async (req, res) => {

    const requestReceiver = req.body;

    const semestersList = requestReceiver.semesters;
    const yearsList = requestReceiver.year;
    const eventsList = requestReceiver.event;

    try{
        const result1 = await Event.insertMany(eventsList);
        const result2 = await Semester.insertMany(semestersList);
        const result3 = await Event.insertMany(yearsList);

        res.status(201).json({'success': `Added events ${result1}\n Added semesters ${result2}\n Added years ${result3}`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleAddYear};