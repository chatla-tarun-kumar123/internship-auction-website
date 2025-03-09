const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(); // mogodb url
    } catch (e) {
        console.error("MongoDB Connection Failed:", e);
        process.exit(1);
    }
};

module.exports = connectDB;
