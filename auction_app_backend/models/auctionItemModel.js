const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    // need item id to recognize the item
    
    title: String,
    description: String,
    highestBid: { type: Number, default: 1000 },
    favorite: { type: Boolean, default: false },
    auctionEndDate: String,
    winner: { type: String, default: "" },
    bids: [{ amount: Number, date: { type: Date, default: Date.now } }],
});

const AuctionItem = mongoose.model("AuctionItem", auctionSchema);

module.exports = AuctionItem;
