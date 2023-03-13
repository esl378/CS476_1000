const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleAddYear = async (req, res) => {
    const fuckOff = req.body;
    const fuckaOff = fuckOff.year;
    console.log(fuckaOff);
    //|| !semesters || !events
    if(!fuckOff) return res.status(400).json({'message': 'invalid year or semester or event'});

    try{
        const createYear = await Year.create({
            "year": fuckaOff
        });
        res.status(201).json({'success': `New year ${fuckaOff} created!`});

    } catch(err) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = {handleAddYear};