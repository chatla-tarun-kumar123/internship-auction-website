const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    itemName: String,
    description: String,
    currentBid: Number,
    highestBidder: String,
    closingTime: Date,
    isClosed: { type: Boolean, default: false },
    imageUrl: String,
});

const AuctionItem = mongoose.model("AuctionItem", auctionSchema);

module.exports = AuctionItem;
