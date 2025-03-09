import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            navigate("/signin");
            return;
        }

        const fetchItems = async () => {
            try {
                const res = await axios.get("http://localhost:3001/auctions", {
                    headers: { Authorization: `${token}` },
                });
                setItems(res.data);
            } catch (error) {
                console.error("Error fetching auctions:", error);
            }
        };
        fetchItems();
    }, [navigate]);

    return (
        <div
            className="d-flex flex-column align-items-center mx-auto w-75"
            style={{
                margin: "100px auto 40px auto",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8f9fa",
                padding: "20px",
            }}
        >
            <h2 className="text-center w-100" style={{ color: "#007bff", marginBottom: "20px" }}>
                Auction Dashboard
            </h2>

            {/* 🔹 Post Auction Button */}
            <div className="d-flex justify-content-between w-100 mb-3">
                <Link to="/post-auction">
                    <button className="btn btn-primary">Post New Auction</button>
                </Link>
            </div>

            {/* 🔹 Auction Items List */}
            <ul className="list-group w-100">
                {items.length > 0 ? (
                    items.map((item) => (
                        <li key={item._id} className="list-group-item d-flex align-items-center">
                            {/* Auction Item Image */}
                            {item.imageUrl && (
                                <img
                                    src={item.imageUrl}
                                    alt={item.itemName}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        marginRight: "15px",
                                    }}
                                />
                            )}

                            {/* Auction Details */}
                            <Link to={`/auction/${item._id}`} className="text-decoration-none flex-grow-1">
                                <strong>{item.itemName}</strong> - 💰 Current Bid: ${item.currentBid}{" "}
                                {item.isClosed ? <span className="text-danger">(Closed)</span> : ""}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-center text-muted">No auctions available.</li>
                )}
            </ul>
        </div>
    );
}

export default Dashboard;
