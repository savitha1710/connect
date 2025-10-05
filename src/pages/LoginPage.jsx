










// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Admin login
      if (email === "admin@college.com") {
        const res = await axios.post("http://localhost:5000/api/admin/login", {
          email,
          password,
        });
        console.log("Admin login success:", res.data);
        navigate("/admin/dashboard"); // redirect admin
      } else {
        // Normal user login (student/staff/alumni)
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });

        const user = res.data.user;
        console.log("User login success:", user);

        // Redirect based on role
        if (user.role === "student") navigate("/home"); // or student dashboard if exists
        else if (user.role === "staff") navigate("/home");   // or staff dashboard
        else if (user.role === "alumni") navigate("/home");  // or alumni dashboard
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}

        <div className="signup-container">
          <button onClick={() => navigate("/register-role")} className="signup-link">
            Signup / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
