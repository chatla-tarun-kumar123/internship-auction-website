import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logo.png";
import LogoutButton from "./LogoutButton";

function NavigationBar() {
    const token = localStorage.getItem("authToken"); // Check if user is logged in

    return (
        <div>
            <Navbar bg="primary" fixed="top" data-bs-theme="dark" style={{ padding: "10px 20px" }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" style={{ width: "100px", height: "auto" }} />
                    </Navbar.Brand>
                    <Nav className="me-auto" style={{ fontSize: "18px" }}>
                        <Nav.Link href="/aboutus" style={{ marginRight: "15px", fontWeight: "bold" }}>
                            About us
                        </Nav.Link>

                        {!token ? ( // Show only for non-logged-in users
                            <>
                                <Nav.Link href="/signup" style={{ marginRight: "15px", fontWeight: "bold" }}>
                                    Sign up
                                </Nav.Link>
                                <Nav.Link href="/signin" style={{ fontWeight: "bold" }}>
                                    Sign in
                                </Nav.Link>
                            </>
                        ) : (
                            // Show only for logged-in users
                            <>
                                <Nav.Link href="/dashboard" style={{ fontWeight: "bold" }}>
                                    Dashboard
                                </Nav.Link>
                                <Nav.Link href="/post-auction" style={{ fontWeight: "bold" }}>
                                    Post Auction
                                </Nav.Link>
                                <LogoutButton /> {/* Logout Button */}
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
