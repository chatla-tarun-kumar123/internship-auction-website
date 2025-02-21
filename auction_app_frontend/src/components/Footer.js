import React from "react";
import banner from "../Assets/banner.png";

function Footer() {
    return (
        <div className="container mb-0">
            <div
                className="card mb-3 shadow-lg"
                style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "#f8f9fa" }}
            >
                <div className="card-body text-center p-4">
                    <h5 className="card-title" style={{ color: "#007bff", fontSize: "1.5rem", fontWeight: "bold" }}>
                        The Auction Club
                    </h5>
                    <p className="card-text" style={{ fontSize: "1rem", color: "#343a40" }}>
                        "Unlock exclusive deals and rare finds on our auction platform—where every bid brings
                        excitement! Join now and experience the thrill of winning your dream items at unbeatable
                        prices."
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
                <img className="card-img-bottom" src={banner} alt="footer" style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    );
}

export default Footer;
