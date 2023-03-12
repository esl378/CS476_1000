const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleDelete = async (req, res) => {
    const delYear = req.body;
    const result1 = await Event.deleteMany({year: delYear}).exec();
    const result2 = await Semester.deleteMany({year: delYear}).exec();
    const result3 = await Year.deleteMany({year: delYear}).exec();


}

module.exports = {handleDelete};

