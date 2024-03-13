const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgpath: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  contact: {
    type: String,
    required: true,
  },
  gender: {
    type : String,
    required : true
  },
  status: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  jd: {
    type: String,
    required: true,
  },
  home: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("employees", empSchema);
