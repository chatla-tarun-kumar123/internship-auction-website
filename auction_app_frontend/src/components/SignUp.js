import React from "react";

function SignUp() {
    return (
        <div
            className="d-flex justify-content-center align-items-center mx-auto w-50 "
            style={{
                marginBottom: "50px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8f9fa",
            }}
        >
            <form className="row g-3" style={{ width: "100%" }}>
                <h2 className="text-center w-100" style={{ color: "#007bff", marginBottom: "20px" }}>
                    Sign Up
                </h2>

                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer01"
                        placeholder="First name"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer02"
                        placeholder="Last name"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationServerUsername" className="form-label">
                        Username
                    </label>
                    <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                            type="text"
                            className="form-control is-invalid"
                            id="validationServerUsername"
                            placeholder="Username"
                            required
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationServer03" className="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        className="form-control is-invalid"
                        id="validationServer03"
                        placeholder="City"
                        required
                    />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationServer04" className="form-label">
                        State
                    </label>
                    <select className="form-select is-invalid" id="validationServer04" required>
                        <option selected disabled value="">
                            Choose...
                        </option>
                        <option>State 1</option>
                        <option>State 2</option>
                    </select>
                    <div className="invalid-feedback">Please select a valid state.</div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationServer05" className="form-label">
                        Zip
                    </label>
                    <input
                        type="text"
                        className="form-control is-invalid"
                        id="validationServer05"
                        placeholder="Zip Code"
                        required
                    />
                    <div className="invalid-feedback">Please provide a valid zip.</div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="checkbox" id="invalidCheck3" required />
                        <label className="form-check-label" htmlFor="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                </div>

                <div className="col-12 text-center">
                    <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
