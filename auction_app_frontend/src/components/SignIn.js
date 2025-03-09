import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:3001/signin", { username, password });
            console.log("Signin Response:", res.data);

            if (res.data.token) {
                localStorage.setItem("authToken", res.data.token);
                navigate("/dashboard"); // Redirect to dashboard
            } else {
                setError("Invalid credentials");
            }
        } catch (err) {
            console.error("Signin Request Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        }
    };
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                width: "30%",
                margin: "100px auto",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8f9fa",
            }}
        >
            <Form style={{ width: "100%" }} onSubmit={handleSignin}>
                <h2 className="text-center" style={{ marginBottom: "20px", color: "#007bff" }}>
                    Sign In
                </h2>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: "5px" }} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ borderRadius: "5px" }}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ borderRadius: "5px" }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: "100%", borderRadius: "5px" }}>
                    Sign In
                </Button>
                {error && <p className="error"> {error}</p>}
            </Form>
        </div>
    );
}

export default SignIn;
