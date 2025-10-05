










// // src/pages/LoginPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Admin login
//       if (email === "admin@college.com") {
//         const res = await axios.post("http://localhost:5000/api/admin/login", {
//           email,
//           password,
//         });
//         console.log("Admin login success:", res.data);
//         navigate("/admin/dashboard"); // redirect admin
//       } else {
//         // Normal user login (student/staff/alumni)
//         const res = await axios.post("http://localhost:5000/api/auth/login", {
//           email,
//           password,
//         });

//         const user = res.data.user;
//         console.log("User login success:", user);

//         // Redirect based on role
//         if (user.role === "student") navigate("/home"); // or student dashboard if exists
//         else if (user.role === "staff") navigate("/home");   // or staff dashboard
//         else if (user.role === "alumni") navigate("/home");  // or alumni dashboard
//       }
//     } catch (err) {
//       console.error(err);
//       setErrorMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>

//         {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}

//         <div className="signup-container">
//           <button onClick={() => navigate("/register-role")} className="signup-link">
//             Signup / Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;










// //LoginPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       if (email === "admin@college.com") {
//         const res = await axios.post("http://localhost:5000/api/admin/login", {
//           email,
//           password,
//         });
//         console.log("Admin login success:", res.data);
//         navigate("/admin/dashboard");
//       } else {
//         const res = await axios.post("http://localhost:5000/api/auth/login", {
//           email,
//           password,
//         });
//         const user = res.data.user;
//         console.log("User login success:", user);
//         if (user.role === "student") navigate("/home");
//         else if (user.role === "staff") navigate("/home");
//         else if (user.role === "alumni") navigate("/home");
//       }
//     } catch (err) {
//       console.error(err);
//       setErrorMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="profile-icon">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//           </svg>
//         </div>
        
//         <h2>Login</h2>
        
//         <form onSubmit={handleLogin}>
//           <div className="input-wrapper">
//             <span className="input-icon">👤</span>
//             <input
//               type="text"
//               placeholder="Username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
          
//           <div className="input-wrapper">
//             <span className="input-icon">🔒</span>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
          
//           <button type="submit">Login</button>
//         </form>

//         {errorMessage && (
//           <p style={{ color: "red" }}>{errorMessage}</p>
//         )}

//         <p>
//           Don't have an account?{" "}
//           <span onClick={() => navigate("/register-role")}>Sign up here</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;














// LoginPage.jsx
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
      if (email === "admin@college.com") {
        const res = await axios.post("http://localhost:5000/api/admin/login", {
          email,
          password,
        });
        console.log("Admin login success:", res.data);
        navigate("/admin/dashboard");
      } else {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });
        const user = res.data.user;
        console.log("User login success:", user);
        if (user.role === "student") navigate("/home");
        else if (user.role === "staff") navigate("/home");
        else if (user.role === "alumni") navigate("/home");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        
        <h2>LOGIN</h2>
        
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-wrapper">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Login</button>
        </form>

        {errorMessage && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register-role")}>Sign up here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
