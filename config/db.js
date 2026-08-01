const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("database is connected")
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = connectDB;

