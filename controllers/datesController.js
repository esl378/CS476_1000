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
        console.log(event);
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handleGetYears = async (req, res) => {
    const { year } = req.body;
    
    const event = await Year.find().exec();
    
    try{
        console.log(event);
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handleGetSemesters = async (req, res) => {
    const { name, strtDate, endDate, year, heldIn } = req.body;
    
    const event = await Semester.find().exec();
    
    try{
        console.log(event);
        res.json(event);
    } catch(err){
        res.status(500).json({'message': err.message});
    }
}

const handlePutYear = async(req, res) => {

    const requestReceiver = req.body;

    const semesters = requestReceiver.semesters;
    const events = requestReceiver.events;

    console.log(semesters);

    try{
        for(let i = 0; i < semesters.length; i++) {
            await Semester.findOneAndUpdate(
                { _id: semesters[i].id},
                {
                    $set: { 
                        name: semesters[i].name,
                        start_date: semesters[i].strtDate,
                        end_date: semesters[i].endDate,
                        year: semesters[i].year,
                        heldIn: semesters[i].heldIn 
                    }
                }
            );
        }

        res.status(201).json({'success': `Success`});
    } catch(err){

        res.status(500).json({'message': 'You no work'});
    
    }
}


module.exports = {handleAddYear, handleGetEvents, handleGetYears, handleGetSemesters, handlePutYear};
