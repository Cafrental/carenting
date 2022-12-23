const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const CarModel = require('./models/cars.js')
const UserModel = require('./models/users.js')
//const OrderModel = require('./models/orders.js')
//const LocationModel = require('./models/locations.js')

mongoose.set('strictQuery', false);

const cors = require('cors')

app.use(express.json());
app.use(cors());

const secret = "5zMJV11Klw6ZWuFYPFmrBJ";


mongoose.connect(
    "mongodb+srv://User0:SuperPass525@appcluster.ocseros.mongodb.net/CarentingDB?retryWrites=true&w=majority"
);

app.post("/createCar", async (req, res) => {
  try {
    const newCar = new CarModel(req.body);
    await newCar.save();
    res.json(car);
  } catch (error) {
    res.json(error);
  }
});

app.get("/getCars", async (req, res) => {
  try {
    const model = req.query.model
    const make = req.query.make

    let query = {};
    if (make || model) {
      query = {
        $or: [
          { make: make ? { $eq: make } : { $exists: false } },
          { model: model ? { $eq: model } : { $exists: false } }
        ]
      };
    }
    const cars = await CarModel.find(query).exec();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars", error });
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = {
    username: req.body.username,
    password: hash
    };
    const newUser = new UserModel(user);
    await newUser.save();
    res.json("User succesfully added");
  } catch (error) {
    res.json(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    // Authenticate user and get user data
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
      res.json("User not found");
    } else {
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (isPasswordValid) {
        // Generate JWT
        const payload = {
          id: user.id,
          username: user.username
        };
        const options = {
          expiresIn: "1d"
        };
        const token = jwt.sign(payload, secret, options);
        // Return JWT to client
        res.json({ token });
      } else {
        res.json("Wrong password");
      }
    }
  } catch (error) {
    res.json(error);
  }
});

app.get('/verify-token', async (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    const decoded = await jwt.verify(token, secret);
    // If the token is valid, return a validation result of true and the username from the decoded token
    return res.send({ isValid: true, username: decoded.username });
  } catch (err) {
    // If the token is invalid, return a validation result of false and a null username
    return res.send({ isValid: false, username: null });
  }
});

app.listen(3001, () => {
    console.log("server started")
});