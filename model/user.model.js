const mongoose = require("mongoose");
// REMOVED: const db = require("../config/db"); -> No longer needed here

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// FIXED: Changed db.model to mongoose.model
const UserModel = mongoose.model("User", userSchema);
module.exports = module.exports = UserModel;
