const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleAddYear = async (req, res) => {
    const addYear = req.body;
    const val = addYear.year;
    console.log(val);
    //|| !semesters || !events
    if(!addYear) return res.status(400).json({'message': 'invalid year or semester or event'});

    try{
        const result = await Year.create({
            "year": val
       });
        res.status(201).json({'success': `New year ${val} created!`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleAddYear};