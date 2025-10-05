



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "./LoginPage.css"; // reuse styles

const StudentRegister = () => {
  const navigate = useNavigate(); // initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    rollNo: "",
    phone: "",
    linkedinUrl: "",
  });

  const [message, setMessage] = useState(""); // for success/error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", formData);
//       setMessage(res.data.message); // "Student registered successfully"

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         department: "",
//         rollNo: "",
//         phone: "",
//         linkedinUrl: "",
//       });

//       // Navigate to login page after 1 second
//       setTimeout(() => {
//         navigate("/"); // "/" is login page route
//       }, 1000);

//     } catch (err) {
//       console.error(err);
//       setMessage(err.response?.data?.message || "Registration failed");
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send role along with the form data
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      ...formData,
      role: "student",
    });
    setMessage(res.data.message);

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      department: "",
      rollNo: "",
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
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
          <input name="rollNo" placeholder="Roll Number" value={formData.rollNo} onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input name="linkedinUrl" placeholder="LinkedIn / Portfolio URL" value={formData.linkedinUrl} onChange={handleChange} />

          <button type="submit">Register</button>
        </form>

        {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}

        {/* Link / Button to go back to Login */}
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account?{" "}
          <button 
            style={{ border: "none", background: "none", color: "#0d6efd", cursor: "pointer", textDecoration: "underline" }} 
            onClick={() => navigate("/")}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default StudentRegister;
