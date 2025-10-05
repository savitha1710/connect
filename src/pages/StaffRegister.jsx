import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // reuse styles

const StaffRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    designation: "",
    phone: "",
    linkedinUrl: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        ...formData,
        role: "staff",
      });
      setMessage(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
        department: "",
        designation: "",
        phone: "",
        linkedinUrl: "",
      });

      setTimeout(() => navigate("/"), 1000); // Go to login
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Staff Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />
          <input
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="linkedinUrl"
            placeholder="LinkedIn / Portfolio URL"
            value={formData.linkedinUrl}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>

        {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default StaffRegister;
