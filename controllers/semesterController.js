const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleGetSemester = async (req, res) => {
    const getYear = req.body;
    const yearVal = getYear.year;
    const semesterVal = getYear.semester;
    console.log(yearVal);
    console.log(semesterVal);
    //|| !semesters || !events
    if(!getYear) return res.status(400).json({'message': 'Invalid'});

    try{
        Event.find(
            {"year": yearVal, "semester": semesterVal},
            (err, data)=>{
                if(err){console.log(err)}
                else {console.log(data)}
            }
            );

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleGetSemester};