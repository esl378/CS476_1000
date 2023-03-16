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

        res.status(201).json({'success': `Added semesters ${result2}`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

const handleGetEvents = async (req, res) => {
    const { description, strtDate, endDate, year, semester } = req.body;
    
    const event = await Event.find().exec();
    
    try{
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handleGetYears = async (req, res) => {
    const { year } = req.body;
    
    const event = await Year.find().exec();
    
    try{
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handleGetSemesters = async (req, res) => {
    const { name, strtDate, endDate, year, heldIn } = req.body;
    
    const event = await Semester.find().exec();
    
    try{
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handlePutYear = async(req, res) => {

    const requestReceiver = req.body;

    const semesters = requestReceiver.semesters;
    const events = requestReceiver.events;

    console.log("The semesters are: ");
    console.log(semesters);
    console.log("\n\n");
    

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


module.exports = {handleAddYear, handleGetEvents, handleGetYears, handleGetSemesters, handlePutYear};
