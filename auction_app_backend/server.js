const express = require("express");
const cors = require("cors");
const connectDB = require("../auction_app_backend/db/connectDB");

const jwt = require("jsonwebtoken");
const jwtpassword = "password";

const app = express();

app.use(express.json());

connectDB();

function tokenVerification(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({ msg: "Token is required" });
        }

        const decoded = jwt.verify(token, jwtpassword);
        req.decoded = decoded;
        next();
    } catch (e) {
        return res.status(403).json({ msg: "Invalid token" });
    }
}

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    if (!(username && email)) {
        return res.send("both fields are required to signup");
    } else {
        const jwttoken = jwt.sign({ email, username }, jwtpassword);

        return res.json({
            msg: "successfully signed up",
            token: jwttoken,
        });
    }
});

app.get("/signin", function (req, res) {
    // const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const token = req.headers.authorization;
    if (!(email && password && token)) {
        return res.send("All fields are required! If New User sign up first");
    } else {
        // const username = req.username;

        //fetch user data like his biddings

        return res.json({
            msg: "successfully signed in",
        });
    }
});
app.use(tokenVerification);

app.get("/openauction", function (req, res) {
    // authenticate in middleware
    // fetch the auctions details from  DB

    return res.json({ msg: "Auction details fetched", user: req.decoded });
});

// Route to place a bid
app.post("/openbid", (req, res) => {
    // const itemID = req.body.id; this id is used to locate the item in DB
    const { bidAmount } = req.body;

    if (!bidAmount || isNaN(bidAmount)) {
        return res.status(400).json({ message: "Invalid bid amount." });
    }

    if (bidAmount <= auctionItem.highestBid) {
        return res.status(400).json({ message: "Bid must be higher than current highest bid." });
    }

    auctionItem.highestBid = bidAmount;
    res.json({ message: "Bid placed successfully!", highestBid: bidAmount });
});

app.listen(3001);
