const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
    Place: {
        type: String,
        required: true,
    },
});

const LocationModel = mongoose.model("locations", LocationSchema)
module.exports = LocationModel;