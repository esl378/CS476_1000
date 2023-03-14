const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleGetSemester = async (req, res) => {
    const getYear = req.body;
    const val = getYear.year;
    console.log(val);
    //|| !semesters || !events
    if(!getYear) return res.status(400).json({'message': 'Invalid'});

    try{
        const result = await Year.find({
            "year": val
       });

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleGetSemester};