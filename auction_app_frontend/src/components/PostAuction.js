import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostAuction() {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [startingBid, setStartingBid] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [image, setImage] = useState(null); // Store image file
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Store selected image file
    };

    const handlePostAuction = async (e) => {
        e.preventDefault();
        setError(""); // Reset errors

        const token = localStorage.getItem("authToken");
        if (!token) {
            alert("You must be signed in to post an auction.");
            navigate("/signin");
            return;
        }

        if (!itemName || !description || !startingBid || !closingTime || !image) {
            setError("All fields, including an image, are required.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("itemName", itemName);
            formData.append("description", description);
            formData.append("startingBid", startingBid);
            formData.append("closingTime", closingTime);
            formData.append("image", image); // Append image file

            await axios.post("http://localhost:3001/auction", formData, {
                headers: {
                    Authorization: `${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Auction item posted!");
            navigate("/dashboard");
        } catch (err) {
            setError("Failed to post auction. Please try again.");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center mx-auto w-50"
            style={{
                margin: "100px auto 40px auto",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8f9fa",
                padding: "20px",
            }}
        >
            <form className="row g-3" style={{ width: "100%" }} onSubmit={handlePostAuction}>
                <h2 className="text-center w-100" style={{ color: "#007bff", marginBottom: "20px" }}>
                    Post New Auction
                </h2>

                <div className="col-md-6">
                    <label className="form-label">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Item Description</label>
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Starting Bid</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Starting Bid"
                        value={startingBid}
                        onChange={(e) => setStartingBid(e.target.value)}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Closing Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={closingTime}
                        onChange={(e) => setClosingTime(e.target.value)}
                        required
                    />
                </div>

                {/* Image Upload */}
                <div className="col-md-12">
                    <label className="form-label">Upload Image</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                <div className="col-12 text-center">
                    <button className="btn btn-primary w-100" type="submit">
                        Post Auction
                    </button>
                </div>

                {error && <p className="text-danger text-center">{error}</p>}
            </form>
        </div>
    );
}

export default PostAuction;
