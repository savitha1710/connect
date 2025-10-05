import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // reuse styles

const RegisterRole = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <p>Select your role to register:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
          <button onClick={() => navigate("/register-student")}>Register as Student</button>
          <button onClick={() => navigate("/register-alumni")}>Register as Alumni</button>
          <button onClick={() => navigate("/register-staff")}>Register as Staff</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterRole;
