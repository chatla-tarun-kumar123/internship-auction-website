import React from "react";
import { Button } from "react-bootstrap";

function LandingPage() {
    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <header style={styles.hero}>
                <h1 style={styles.title}>Welcome to Auction Club</h1>
                <p style={styles.subtitle}>
                    Discover exclusive deals, bid on rare finds, and experience the thrill of online auctions!
                </p>
                <Button variant="warning" size="lg" href="/signup" style={styles.button}>
                    Get Started
                </Button>
            </header>

            {/* Features Section */}
            <section style={styles.featuresSection}>
                <h2>Why Choose Auction Club?</h2>
                <div style={styles.features}>
                    <div style={styles.featureCard}>
                        <h3>🔒 Secure Bidding</h3>
                        <p>Enjoy safe and transparent transactions with verified sellers.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>🛍️ Wide Selection</h3>
                        <p>Bid on collectibles, antiques, luxury items, and more.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>⚡ Real-Time Bidding</h3>
                        <p>Experience live bidding with instant updates and notifications.</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section style={styles.ctaSection}>
                <h2>Join the Auction Club Today!</h2>
                <p>Sign up now and start bidding on exclusive items.</p>
                <Button variant="primary" size="lg" href="/signup">
                    Sign Up Now
                </Button>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>© 2025 Auction Club | All rights reserved.</p>
            </footer>
        </div>
    );
}

// CSS-in-JS Styles
const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
    },
    hero: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "80px 20px",
    },
    title: {
        fontSize: "3rem",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "1.2rem",
        marginBottom: "20px",
    },
    button: {
        fontSize: "1.2rem",
        padding: "10px 20px",
    },
    featuresSection: {
        padding: "50px 20px",
    },
    features: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
    },
    featureCard: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        width: "250px",
        textAlign: "center",
    },
    ctaSection: {
        backgroundColor: "#FFD700",
        padding: "40px 20px",
    },
    footer: {
        backgroundColor: "#343A40",
        color: "#fff",
        padding: "15px",
        marginTop: "20px",
    },
};

export default LandingPage;
