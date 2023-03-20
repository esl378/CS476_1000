const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

//Handles adding calendar years to the database
const handleAddYear = async (req, res) => {

    const requestReceiver = req.body;

    const semestersList = requestReceiver.semesters;
    const yearsList = requestReceiver.year;
    const eventsList = requestReceiver.events;

    try{
        const result4 = await Year.find(yearsList[0]).exec();
        if(!result4[0]) {
            const result3 = await Year.insertMany(yearsList);
        }
        const result1 = await Event.insertMany(eventsList);
        const result2 = await Semester.insertMany(semestersList);

        res.status(201).json({'success': `Added semesters ${result2}`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

//Handles retrieving events from the database
const handleGetEvents = async (req, res) => {
    const { description, strtDate, endDate, year, semester } = req.body;
    
    const event = await Event.find().exec();
    
    try{
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

//Handles retrieving years from the database
const handleGetYears = async (req, res) => {
    const { year } = req.body;
    
    const event = await Year.find().sort({"year": 1}).exec();
    
    try{
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

//Handles retrieving semesters from the database
const handleGetSemesters = async (req, res) => {
    const { name, strtDate, endDate, year, heldIn } = req.body;
    
    const event = await Semester.find().sort({"name": 1}).exec();
    
    try{
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

//handles editting calendar years that are already in the database
const handlePutYear = async(req, res) => {

    const requestReceiver = req.body;

    const semesters = requestReceiver.semesters;
    const events = requestReceiver.events;
    
    try{
        if(semesters) {
            for(let i = 0; i < semesters.length; i++) {
                const result = await Semester.findOneAndUpdate(
                    { _id: semesters[i].id},
                    {
                        $set: { 
                            name: semesters[i].name,
                            strtDate: semesters[i].strtDate,
                            endDate: semesters[i].endDate,
                            year: semesters[i].year,
                            heldIn: semesters[i].heldIn
                        }
                    }
                );
            }
        }
        if(events) {
            for(let i = 0; i < events.length; i++) {
                const result = await Event.findOneAndUpdate(
                    { _id: events[i].id},
                    {
                        $set: { 
                            description: events[i].description,
                            strtDate: events[i].strtDate,
                            endDate: events[i].endDate,
                            year: events[i].year,
                            semester: events[i].semester 
                        }
                    }
                );
            }
        } 

        res.status(201).json({'success': `Success`});
    } catch(err){

        res.status(500).json({'message': err.message});
    
    }
}

//Handles deleting calendars from the database
const handleDelete = async (req, res) => {
    const delYear = req.body;
    const val = delYear.year;
    
    try{
        //find all database entries that match the selection criteria
        const result1 = await Event.deleteMany({year: val}).exec();
        const result2 = await Semester.deleteMany({year: val}).exec();
        const result3 = await Year.deleteMany({year: val}).exec();
        
        //obtain the number of items deleted and send it client side for confirmation message
        var deled = result1.deletedCount + result2.deletedCount + result3.deletedCount;
        res.json({"deleted": deled});
            
    } catch (err){ 
        res.status(500).json({'message': err.message});
    }
}

//Handles retrieving semester data for the main view page from the database
const handleGetSem = async (req, res) => {
    const infoReceiver = req.body;
    const semList = infoReceiver.semesters;
    const yrList = infoReceiver.years;
    const evtList = infoReceiver.events;

    try{
        const semResult = await Semester.find(semList).sort({"name": 1}).exec();
        const yrResult = await Year.find(yrList).sort({"year": 1}).exec();
        const evtResult = await Event.find(evtList).exec();
        res.status(201).json({semResult, yrResult, evtResult});
    }catch(err){
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleAddYear, handleGetEvents, handleGetYears, handleGetSemesters, handlePutYear, handleDelete, handleGetSem};
