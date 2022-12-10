const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    telephone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAuth: {
        type: Boolean,
        required: true,
    }
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;