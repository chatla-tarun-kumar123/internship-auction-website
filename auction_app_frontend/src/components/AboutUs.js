import React from "react";

const AboutUs = () => {
    return (
        <div
            style={{
                width: "80%",
                marginInline: "auto",
                margin: "100px auto 40px auto",
                fontFamily: "Arial, sans-serif",
                color: "#333",
                lineHeight: "1.6",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#007bff" }}> About Us</h1>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
                Welcome to <b>AUCTION CLUB!</b> At <b>AUCTION CLUB</b>, we bring buyers and sellers together in a
                dynamic, transparent, and exciting auction marketplace. Whether you're looking for rare collectibles,
                luxury items, antiques, or everyday deals, our platform ensures a seamless and secure bidding experience
                for everyone.
            </p>
            <h2 style={{ color: "#007bff" }}>Our Mission</h2>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
                Our mission is to revolutionize online auctions by providing a fair, user-friendly, and innovative
                platform where users can discover unique items, engage in competitive bidding, and win amazing deals. We
                believe in making auctions accessible, exciting, and rewarding for all.
            </p>
            <h1 style={{ color: "#007bff" }}>Why Choose Us?</h1>
            <h5 style={{ color: "#ff6600" }}>Trusted Marketplace</h5>
            <p>We ensure authenticity, secure transactions, and verified sellers.</p>
            <h5 style={{ color: "#ff6600" }}>Diverse Listings</h5>
            <p>From rare antiques to modern electronics, we offer a wide variety of items.</p>
            <h5 style={{ color: "#ff6600" }}>Seamless Experience</h5>
            <p>Our easy-to-use platform provides real-time bidding, instant notifications, and secure payments.</p>
            <h5 style={{ color: "#ff6600" }}>Customer Support</h5>
            <p>Our dedicated team is here to assist you at every step of your auction journey.</p>
            <h1 style={{ color: "#007bff" }}>How It Works</h1>
            <h5 style={{ color: "#ff6600" }}>Sign Up & Browse</h5>
            <p>Create an account and explore thousands of listings.</p>
            <h5 style={{ color: "#ff6600" }}>Place Your Bids</h5>
            <p>Enter competitive bids in real time to win your desired items.</p>
            <h5 style={{ color: "#ff6600" }}>Secure Payments</h5>
            <p>Complete your purchase with our trusted payment options.</p>
            <h5 style={{ color: "#ff6600" }}>Receive Your Item</h5>
            <p>Enjoy fast and reliable shipping from our verified sellers.</p>
            <h1 style={{ color: "#007bff" }}>Join the Auction Community!</h1>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
                Become a part of an exciting and ever-growing auction community. Whether you're a collector, a seller,
                or a bargain hunter,
                <b>AUCTION CLUB</b> is your go-to destination for thrilling online auctions.
            </p>
            <p style={{ fontSize: "18px", textAlign: "center" }}>
                Start bidding today and experience the thrill of winning!
            </p>
            <p style={{ fontSize: "18px", textAlign: "center", color: "#007bff" }}>
                For inquiries, contact us at{" "}
                <b>
                    <a href="mailto:auctionClub@gmail.com" style={{ color: "#ff6600" }}>
                        auctionClub@gmail.com
                    </a>
                </b>
                or visit our Help Center for assistance.
            </p>
        </div>
    );
};

export default AboutUs;
