const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("url");
    } catch (e) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
