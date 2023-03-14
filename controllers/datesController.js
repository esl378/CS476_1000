const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleAddYear = async (req, res) => {
    try{
        const yourFunc = await Event.create({
            "year": "20001",
            "description": "Winter",
            "endDate": "2001-02-02",
            "strtDate": "2003-01-01",
            "semester": "Winter"
        });

        res.status(201).json({'success': `Succeed ${yourFunc}`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleAddYear};