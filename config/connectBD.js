const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect("mongodb://localhost/contactListWorkshop", () => {
    try {
      console.log("database connected... ")
    } catch (error) {
      console.log(error);
    }
  })
}

module.exports = connectDB;
//connect the application to database