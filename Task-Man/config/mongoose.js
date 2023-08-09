
const mongoose= require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/task_db");

const db = mongoose.connection;
db.on("error",console.error.bind(console, "error"));

db.once("open",function(){
    console.log("db connected");
});

module.exports = db;
