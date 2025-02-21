import React from "react";
import vintageItem from "../Assets/vintageImg/item1.jpg";
// import Button from "react-bootstrap/esm/Button";

function OpenItems() {
    return (
        <div className="card  bg-white d-flex flex-row mb-2 " style={{ width: "80%", marginInline: "auto" }}>
            <div class="card-body w-70 text-black ">
                <h5 className="card-title font-weight-bold">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="d-flex flex-row gap-3">
                    <button className="btn btn-success ">
                        <a className="text-decoration-none text-white" href="/openbid">
                            BID
                        </a>
                    </button>
                    <button className="btn btn-info text-decoration-none">
                        <a href="/" className="text-decoration-none text-white">
                            More Info
                        </a>
                    </button>
                    <button className="btn btn-warning">
                        <a href="/" className="text-decoration-none text-white">
                            Mark Favorite
                        </a>
                    </button>
                    <button className="btn btn-danger ">
                        <a className="text-decoration-none text-white" href="/">
                            Auction Ending Soon DATE{" "}
                        </a>
                    </button>
                </div>
            </div>
            <div>
                <img
                    className="card-img-top "
                    style={{ width: "300px", height: "auto" }}
                    src={vintageItem}
                    alt="Card  cap"
                ></img>
            </div>
        </div>
    );
}

export default OpenItems;
