import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ regLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    if (regLogin.email === email && regLogin.password === password) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Login Failed! Please check your credentials.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "22rem" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="pwd"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handlelogin} className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;