const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password:{type: String, required: true},
  email:{type: String, required: true},
  phoneNumber:{type: Number},
  Age:{type: Number, required: true},
  datesList: [Number]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
