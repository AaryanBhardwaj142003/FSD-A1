import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashBoard = ({ regDash }) => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center pt-5">
      <div
        className="container text-center p-5 shadow rounded bg-white"
        style={{ maxWidth: "600px" }}
      >
        <div className="jumbotron bg-transparent">
          <h1
            className="display-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            User Dashboard
          </h1>
          <h2
            className="text-danger"
            style={{ textShadow: "1px 1px 3px rgba(255, 0, 0, 0.3)" }}
          >
            Logout
          </h2>
          <p
            className="lead"
            style={{ fontStyle: "italic", color: "#555" }}
          >
            Welcome, <span className="text-primary">{regDash.name}</span>!
          </p>
        </div>
        <div className="mt-4">
          <p className="text-secondary" style={{ fontSize: "1.1rem" }}>
            Your Login Email: <span className="text-dark">{regDash.email}</span>
          </p>
          <p className="text-secondary" style={{ fontSize: "1.1rem" }}>
            Click the button below to Fetch Weather:
          </p>
          <button className="btn btn-success shadow-sm">Fetch Weather</button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
