const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://chatlatarunkumar123:pxQcM3E5Uj6QJQ6d@cluster0.q77u1.mongodb.net/auction_app"
        );
    } catch (e) {
        console.error("MongoDB Connection Failed:", e);
        process.exit(1);
    }
};

module.exports = connectDB;
