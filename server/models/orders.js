const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    carId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    startLocation: {
        type: String,
        required: true,
    },
    endLocation: {
        type: String,
        required: true,
    },
});

const OrderModel = mongoose.model("orders", OrderSchema)
module.exports = OrderModel;