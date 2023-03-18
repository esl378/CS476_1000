const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleGetSem = async (req, res) => {
    const infoReceiver = req.body;

    const semList = infoReceiver.semesters;
    console.log(semList);
    const yrList = infoReceiver.years;
    const evtList = infoReceiver.events;

    try{
        const semResult = await Semester.find(semList).sort({"name": 1}).exec();
        const yrResult = await Year.find(yrList).sort({"year": 1}).exec();
        const evtResult = await Event.find(evtList).exec();
        //const results = yrResult.concat(semResult.concat(evtResult));
        //console.log(results);
        //console.log(yrResult);
        //console.log(evtResult);
        res.status(201).json({semResult, yrResult, evtResult});
    }catch(err){
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleGetSem};