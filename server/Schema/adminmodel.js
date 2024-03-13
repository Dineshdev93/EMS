const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcryptjs')
const adminSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique : true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Not valid email')
        }
      }
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

adminSchema.pre('save',async function(next){
   if(this.isModified('password')){
     this.password =await bcrypt.hash(this.password,12)
   }
   next()
})

const adminDb = new mongoose.model("admins", adminSchema);
module.exports = adminDb;
