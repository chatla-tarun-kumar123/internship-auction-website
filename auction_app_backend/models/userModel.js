const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    passwordHash: String,
});w

const User = mongoose.model("User", userSchema);

module.exports = User;
