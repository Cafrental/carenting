const express = require("express")
const app = express()
const mongoose = require('mongoose')
const CarModel = require('./models/cars.js')
const UserModel = require('./models/users.js')
const OrderModel = require('./models/orders.js')
const LocationModel = require('./models/locations.js')

const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://User0:SuperPass525@appcluster.ocseros.mongodb.net/CarentingDB?retryWrites=true&w=majority"
);

app.get("/getCars", (req, res) => {
     CarModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.post("/createCar", async (req, res) => {
    const car = req.body;
    const newCar = new CarModel(car);
    await newCar.save();

    res.json(car);
});


app.listen(3001, () => {
    console.log("server started")
});