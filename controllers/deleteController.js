const Event = require('../models/Event');
const Semester = require('../models/Semester');
const Year = require('../models/Year');

const handleDelete = async (req, res) => {
    const delYear = req.body;
    const val = delYear.year;
    
    try{
        const result1 = await Event.deleteMany({year: val}).exec();
        const result2 = await Semester.deleteMany({year: val}).exec();
        const result3 = await Year.deleteMany({year: val}).exec();
        
        console.log(result1);
        console.log(result2);
        console.log(result3);
        var deled = result1.deletedCount + result2.deletedCount + result3.deletedCount;
        res.json({"deleted": deled});
            
        
    } catch (err){ 
        res.status(500).json({'message': err.message});
    }
   

}


module.exports = {handleDelete};

