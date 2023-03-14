const Year = require('../models/Year');

const handlePopulate = async (req, res) => {
    try{
        const years = await Year.find();
        if(!years) return res.status(204).json({'message': 'No years found, calander empty.'});
        
        res.json(years);
    } catch(err){
        res.status(500).json({'message': err.message});
    }

    
}

module.exports = {handlePopulate};