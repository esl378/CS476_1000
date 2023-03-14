const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleAddYear = async (req, res) => {
    const requestReceiver = req.body;
    const semestersList = requestReceiver.semesters;
    const yearsList = requestReceiver.year;
    const eventsList = requestReceiver.events;

    //|| !semesters || !events
    //if(!addYear) return res.status(400).json({'message': 'invalid year or semester or event'});

    try{

        //console.log(semestersList);
        //console.log(yearsList);
        //console.log(eventsList);
        const result1 = await Year.insertMany(yearsList);
        const result2 = await Semester.insertMany(semestersList);
        const result3 = await Event.insertMany(eventsList);
        
        res.status(201).json({'success': `Succeed `});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleAddYear};