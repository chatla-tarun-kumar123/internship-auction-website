import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent form reload
        setError(""); // Reset general error
        setUsernameError(""); // Reset username error
        setEmailError(""); // Reset email error
        setPasswordError(""); // Reset password error

        if (!username) {
            setUsernameError("Username is required");
        }
        if (!email) {
            setEmailError("Email is required");
        }
        if (!password) {
            setPasswordError("Password is required");
        }
        if (!username || !email || !password) {
            return;
        }

        try {
            await axios.post("http://localhost:3001/signup", {
                username,
                email,
                password,
            });

            alert("Signup successful! Please sign in.");
            navigate("/signin"); // Redirect to signin page
        } catch (err) {
            console.log("Signup Error:", err.response?.data || err.message);

            // Handle specific error messages from backend
            if (err.response?.data?.message.includes("Username already exists")) {
                setUsernameError("Username is already taken. Try another.");
            } else {
                setError(err.response?.data?.message || "Signup failed. Please try again.");
            }
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center mx-auto w-50"
            style={{
                margin: "100px auto",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8f9fa",
            }}
        >
            <form className="row g-3" style={{ width: "100%" }} onSubmit={handleSignup}>
                <h2 className="text-center w-100" style={{ color: "#007bff", marginBottom: "20px" }}>
                    Sign Up
                </h2>

                {/* Username Field */}
                <div className="col-md-4">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className={`form-control ${usernameError ? "is-invalid" : "is-valid"}`}
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setUsernameError(""); // Clear error on change
                        }}
                        required
                    />
                    {usernameError && <div className="invalid-feedback">{usernameError}</div>}
                </div>

                {/* Email Field */}
                <div className="col-md-4">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                            type="email"
                            className={`form-control ${emailError ? "is-invalid" : "is-valid"}`}
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(""); // Clear error on change
                            }}
                            required
                        />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                    </div>
                </div>

                {/* Password Field */}
                <div className="col-md-4">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className={`form-control ${passwordError ? "is-invalid" : "is-valid"}`}
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(""); // Clear error on change
                        }}
                        required
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>

                {/* Terms and Conditions */}
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="checkbox" id="termsCheck" required />
                        <label className="form-check-label" htmlFor="termsCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center">
                    <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>
                        Submit
                    </button>
                </div>

                {/* General Error Message */}
                {error && <p className="error text-danger text-center">{error}</p>}
            </form>
        </div>
    );
}

export default SignUp;
