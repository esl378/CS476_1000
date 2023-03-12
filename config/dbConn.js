const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.URI_ADMIN, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            dbName: 'academic_schedule'
         });
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;