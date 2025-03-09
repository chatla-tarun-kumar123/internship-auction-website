const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connectDB = require("../auction_app_backend/db/connectDB");
const User = require("./models/userModel");
const AuctionItem = require("./models/auctionItemModel");

const app = express();
const saltRounds = 10;
const SECRET_KEY = "password";

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files
connectDB();

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Middleware for Token Verification
function tokenVerification(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(403).json({ msg: "Token is required" });

        const decoded = jwt.verify(token, SECRET_KEY);
        req.decoded = decoded;
        next();
    } catch (e) {
        return res.status(403).json({ msg: "Invalid token" });
    }
}

// Signup Route
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.status(400).json({ msg: "All fields are required" });

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already exists" });

        const hash = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ username, email, passwordHash: hash });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Signin Route
app.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ msg: "All fields are required" });

        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id, username }, SECRET_KEY, { expiresIn: "24h" });
        res.json({ message: "Signin successful", token });
    } catch (e) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Get all auctions
app.get("/auctions", async (req, res) => {
    try {
        const auctions = await AuctionItem.find();
        auctions.forEach((auction) => {
            if (auction.imageUrl && !auction.imageUrl.startsWith("http")) {
                auction.imageUrl = `${req.protocol}://${req.get("host")}${auction.imageUrl}`;
            }
        });
        res.json(auctions);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Create Auction with Image Upload
app.post("/auction", tokenVerification, upload.single("image"), async (req, res) => {
    try {
        const { itemName, description, startingBid, closingTime } = req.body;
        if (!itemName || !description || !startingBid || !closingTime)
            return res.status(400).json({ message: "All fields are required" });

        const imageUrl = req.file ? `/uploads/${req.file.filename}` : ""; // No double prefix
        const fullImageUrl = imageUrl ? `${req.protocol}://${req.get("host")}${imageUrl}` : "";

        const newItem = new AuctionItem({
            itemName,
            description,
            currentBid: startingBid,
            highestBidder: "",
            closingTime,
            imageUrl, // Store relative URL
        });

        await newItem.save();
        res.status(201).json({ message: "Auction created!", item: newItem });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get Single Auction Item with Image URL Fix
app.get("/auctions/:id", async (req, res) => {
    try {
        const auction = await AuctionItem.findById(req.params.id);
        if (!auction) return res.status(404).json({ message: "Auction not found" });

        // Fix duplicate URL issue
        if (auction.imageUrl && !auction.imageUrl.startsWith("http")) {
            auction.imageUrl = `${req.protocol}://${req.get("host")}${auction.imageUrl}`;
        }

        res.json(auction);
    } catch (error) {
        res.status(500).json({ message: "Error fetching auction", error });
    }
});

app.listen(3001, () => {
    console.log("Connected to server successfully");
});
