const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {type: String, require: true, min: 3, max: 20, unique: true, },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
  profilePicture: { type: String, default: "",},
  skills: { type: [String], required: true, },
  bio: { type: String, },
  request: { type:[String], default: []},
  friends: {type: [String], default: []},
  isAdmin: { type: Boolean, default: false, },
  date: { type: Date, default: Date.now, },
});

module.exports = mongoose.model("User", UserSchema);
