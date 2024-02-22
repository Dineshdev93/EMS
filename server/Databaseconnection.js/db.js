const mongoose = require("mongoose");
const colors = require("colors");

const Connectdb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://dineshsharmadev93:djdk1234@cluster0.i3hny1y.mongodb.net/employedb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log(`Mongodb Connected Succesfully`.bgMagenta);
  } catch (error) {
    console.error(`Mongodb not connected ${error}`.bgRed);
    process.exit(1);
  }
};
module.exports = Connectdb;
