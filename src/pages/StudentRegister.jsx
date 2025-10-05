



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // import useNavigate
// import "./LoginPage.css"; // reuse styles

// const StudentRegister = () => {
//   const navigate = useNavigate(); // initialize navigate
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     department: "",
//     rollNo: "",
//     phone: "",
//     linkedinUrl: "",
//   });

//   const [message, setMessage] = useState(""); // for success/error

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post("http://localhost:5000/api/auth/register", formData);
// //       setMessage(res.data.message); // "Student registered successfully"

// //       // Reset form
// //       setFormData({
// //         name: "",
// //         email: "",
// //         password: "",
// //         department: "",
// //         rollNo: "",
// //         phone: "",
// //         linkedinUrl: "",
// //       });

// //       // Navigate to login page after 1 second
// //       setTimeout(() => {
// //         navigate("/"); // "/" is login page route
// //       }, 1000);

// //     } catch (err) {
// //       console.error(err);
// //       setMessage(err.response?.data?.message || "Registration failed");
// //     }
// //   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // Send role along with the form data
//     const res = await axios.post("http://localhost:5000/api/auth/register", {
//       ...formData,
//       role: "student",
//     });
//     setMessage(res.data.message);

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       department: "",
//       rollNo: "",
//       phone: "",
//       linkedinUrl: "",
//     });

//     setTimeout(() => navigate("/"), 1000); // Go to login
//   } catch (err) {
//     setMessage(err.response?.data?.message || "Registration failed");
//   }
// };


//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Student Registration</h2>
//         <form onSubmit={handleSubmit}>
//           <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//           <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//           <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//           <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
//           <input name="rollNo" placeholder="Roll Number" value={formData.rollNo} onChange={handleChange} />
//           <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
//           <input name="linkedinUrl" placeholder="LinkedIn / Portfolio URL" value={formData.linkedinUrl} onChange={handleChange} />

//           <button type="submit">Register</button>
//         </form>

//         {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}

//         {/* Link / Button to go back to Login */}
//         <p style={{ marginTop: "15px", textAlign: "center" }}>
//           Already have an account?{" "}
//           <button 
//             style={{ border: "none", background: "none", color: "#0d6efd", cursor: "pointer", textDecoration: "underline" }} 
//             onClick={() => navigate("/")}
//           >
//             Login here
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StudentRegister;




















// ============================================

// // StudentRegister.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const StudentRegister = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     department: "",
//     rollNo: "",
//     phone: "",
//     linkedinUrl: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         ...formData,
//         role: "student",
//       });
//       setMessage(res.data.message);
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         department: "",
//         rollNo: "",
//         phone: "",
//         linkedinUrl: "",
//       });
//       setTimeout(() => navigate("/"), 1000);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="profile-icon">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
//           </svg>
//         </div>
        
//         <h2>Register</h2>
        
//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <span className="input-icon">👤</span>
//             <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">📧</span>
//             <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">🔒</span>
//             <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">🏛️</span>
//             <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">🎓</span>
//             <input name="rollNo" placeholder="Roll Number" value={formData.rollNo} onChange={handleChange} required />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">📱</span>
//             <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">🔗</span>
//             <input name="linkedinUrl" placeholder="LinkedIn / Portfolio URL" value={formData.linkedinUrl} onChange={handleChange} />
//           </div>
          
//           <button type="submit">Create Account</button>
//         </form>

//         {message && <p style={{ color: message.includes("success") ? "green" : "red" }}>{message}</p>}

//         <p>
//           Already have an account?{" "}
//           <span onClick={() => navigate("/")}>Login here</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StudentRegister;











// StudentRegister.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    rollNo: "",
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
        role: "student",
      });
      setMessage(res.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        department: "",
        rollNo: "",
        phone: "",
        linkedinUrl: "",
      });
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
        </div>
        
        <h2>REGISTER</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </span>
            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </span>
            <input name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </span>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </span>
            <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </span>
            <input name="rollNo" placeholder="Roll Number" value={formData.rollNo} onChange={handleChange} required />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </span>
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </span>
            <input name="linkedinUrl" placeholder="LinkedIn / Portfolio URL" value={formData.linkedinUrl} onChange={handleChange} />
          </div>
          
          <button type="submit">Create Account</button>
        </form>

        {message && <p style={{ color: message.includes("success") ? "green" : "red" }}>{message}</p>}

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default StudentRegister;



