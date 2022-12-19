const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    telephone: {
        type: Number,
        required: false,
    },
    username: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true,
    },
    isAuth: {
        type: Boolean,
        required: false,
    }
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;