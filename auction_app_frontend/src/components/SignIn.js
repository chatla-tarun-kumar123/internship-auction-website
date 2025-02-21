import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignIn() {
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
            <Form style={{ width: "100%" }}>
                <h2 className="text-center" style={{ marginBottom: "20px", color: "#007bff" }}>
                    Sign In
                </h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: "5px" }} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{ borderRadius: "5px" }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: "100%", borderRadius: "5px" }}>
                    Sign In
                </Button>
            </Form>
        </div>
    );
}

export default SignIn;
