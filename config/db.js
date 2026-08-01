const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connectDB = async () => {
    try {
        // FIXED: String concatenation using backticks instead of mathematical division "/"
        await mongoose.connect(`${process.env.MONGOOSE_URL}/todo`);
        console.log("Database is connected successfully.");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Stop the app if database connection fails
    }
};

module.exports = connectDB;
