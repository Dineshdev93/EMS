const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Secret_Key = "dhgdhasyrovnbnbcnb";
const adminSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Not valid email");
        }
      },
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

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// generate token
adminSchema.methods.genaratetoken = async function () {
  try {
    const newtoken = jwt.sign({ _id: this._id }, Secret_Key, {
      expiresIn: "1d",
    });
    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (error) {
    console.log(error);
  }
};

const adminDb = new mongoose.model("admins", adminSchema);
module.exports = adminDb;
