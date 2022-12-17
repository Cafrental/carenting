const express = require("express");
const app = express()
const TaskModel = require("../models/task.js");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/dane");

//router.post("/send", (req, res) => {
//    item = new TaskModel({
//      title: req.body.title,
//      content: req.body.content,
//      date: req.body.date,
//    });
//  
//    item.save(function (err, item) {
//      if (err) console.log(err);
//      res.redirect("");
//    });
//  });

  app.post("/createTask", async (req, res) => {
    const task = req.body;
    const newTask = new TaskModel(task);
    await newTask.save();

    res.json(task);
});