const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 10,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        maxlength: 10,
        minlength: 10,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        maxlength: 100,
        minlength: 10,
    },
    password: {
        type: String,
        required: true,
        maxlength: 10,
        minlength: 6,
    }
});

userSchema.pre('save', async function () {
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);
        user.password = hashpass;


    } catch (error) {
        throw error;

    }
})

// FIXED: Changed db.model to mongoose.model
const UserModel = mongoose.model("User", userSchema);
module.exports = module.exports = UserModel;
