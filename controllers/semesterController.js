const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleGetSem = async (req, res) => {
    const infoReceiver = req.body;

    const semList = infoReceiver.semesters;
    const yrList = infoReceiver.years;
    const evtList = infoReceiver.events;

    try{
        const semResult = await Semester.find(semList).exec();
        const yrResult = await Year.find(yrList).exec();
        const evtResult = await Event.find(evtList).exec();
        //console.log(semResult);
        //console.log(yrResult);
        //console.log(evtResult);
        res.status(201).json({'success': `Success`});
    }catch(err){
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleGetSem};