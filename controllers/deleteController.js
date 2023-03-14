const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleDelete = async (req, res) => {
    const delYear = req.body;
    const val = delYear.year;
    console.log(typeof(val));
    try{
        const result1 = await Event.deleteMany({year: val}).exec();
        const result2 = await Semester.deleteMany({year: val}).exec();
        const result3 = await Year.deleteMany({year: val}).exec();
        
        console.log(result1);
        console.log(result2);
        console.log(result3);
        res.status(201).json({'success': `Academic year ${val} has been deleted`});
        
            
        
    } catch (err){ 
        res.status(500).json({'message': err.message});
    }
   

}


module.exports = {handleDelete};

