const mongoose = require('mongoose');

const uri = process.env.DATA_BASE_URI || "mongodb://127.0.0.1:27017/main";

mongoose.set('strictQuery', true);
const connection = async()=>{
    try {
        
        await mongoose.connect(uri);
        console.log("database connect success");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


module.exports = connection
