const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: true,
    }
});

const CarModel = mongoose.model("cars", CarSchema)
module.exports = CarModel;