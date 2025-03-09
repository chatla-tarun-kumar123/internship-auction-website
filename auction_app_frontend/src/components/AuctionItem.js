import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AuctionItem() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [bid, setBid] = useState(0);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const token = localStorage.getItem("authToken") || "";

    useEffect(() => {
        const fetchItem = async () => {
            if (!token) return;
            try {
                console.log(`Fetching: http://localhost:3001/auctions/${id}`);
                const res = await axios.get(`http://localhost:3001/auctions/${id}`, {
                    headers: { Authorization: `${token}` },
                });
                console.log("Response:", res.data);
                setItem(res.data);
            } catch (error) {
                setMessage("Error fetching auction item: " + (error.response?.data?.message || error.message));
                console.error(error);
            }
        };

        fetchItem();
    }, [id, token]);

    const handleBid = async () => {
        if (bid <= item.currentBid) {
            setMessage("Bid must be higher than the current bid.");
            return;
        }

        try {
            const res = await axios.post(
                `http://localhost:3001/bid/${id}`,
                { bid, username },
                { headers: { Authorization: `${token}` } }
            );
            setMessage(res.data.message);
            if (res.data.winner) {
                setMessage(`Auction closed. Winner: ${res.data.winner}`);
            }
        } catch (error) {
            setMessage("Error placing bid: " + (error.response?.data?.message || error.message));
            console.error(error);
        }
    };

    return (
        <div
            className="d-flex flex-column align-items-center mx-auto w-50"
            style={{
                margin: "100px auto 40px auto",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8f9fa",
                padding: "30px",
            }}
        >
            {/* Display Item Image */}
            {item.imageUrl && (
                <img
                    src={item.imageUrl}
                    alt={item.itemName}
                    style={{
                        width: "100%",
                        maxHeight: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "20px",
                    }}
                />
            )}

            <h2
                className="text-center w-100"
                style={{
                    background: "linear-gradient(to right, #007bff, #00c6ff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontSize: "28px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                {item.itemName || "Auction Item"}
            </h2>

            <p
                className="text-center"
                style={{
                    fontStyle: "italic",
                    color: "#555",
                    fontSize: "18px",
                    maxWidth: "80%",
                    lineHeight: "1.5",
                    marginBottom: "20px",
                }}
            >
                {item.description ? `📜 ${item.description}` : "No description available."}
            </p>

            <p>
                <strong>💰 Current Bid:</strong> ${item.currentBid}
            </p>
            <p>
                <strong>🏆 Highest Bidder:</strong> {item.highestBidder || "No bids yet"}
            </p>

            <input
                type="text"
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
            />

            <input
                type="number"
                className="form-control mb-3"
                value={bid}
                onChange={(e) => setBid(Number(e.target.value))}
                placeholder="Enter your bid"
                required
            />

            <button className="btn btn-primary w-100" onClick={handleBid}>
                🚀 Place Bid
            </button>

            {message && <p className="text-danger mt-2">{message}</p>}
        </div>
    );
}

export default AuctionItem;
