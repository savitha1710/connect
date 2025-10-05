// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css"; // reuse styles

// const RegisterRole = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Register</h2>
//         <p>Select your role to register:</p>
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
//           <button onClick={() => navigate("/register-student")}>Register as Student</button>
//           <button onClick={() => navigate("/register-alumni")}>Register as Alumni</button>
//           <button onClick={() => navigate("/register-staff")}>Register as Staff</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterRole;













///////////////////////////////11111111111111111111111111












// // RegisterRole.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const RegisterRole = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="profile-icon">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//           </svg>
//         </div>
        
//         <h2>Register</h2>
//         <p style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
//           Select your role to register:
//         </p>
        
//         <div className="role-buttons">
//           <button onClick={() => navigate("/register-student")}>Register as Student</button>
//           <button onClick={() => navigate("/register-alumni")}>Register as Alumni</button>
//           <button onClick={() => navigate("/register-staff")}>Register as Staff</button>
//         </div>

//         <p>
//           Already have an account?{" "}
//           <span onClick={() => navigate("/")}>Login here</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterRole;


















// RegisterRole.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const RegisterRole = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        
        <h2>REGISTER</h2>
        <p style={{ color: "black", textAlign: "center", marginBottom: "20px", fontSize: "15px" }}>
          Select your role to register:
        </p>
        
        <div className="role-buttons">
          <button onClick={() => navigate("/register-student")}>Register as Student</button>
          <button onClick={() => navigate("/register-alumni")}>Register as Alumni</button>
          <button onClick={() => navigate("/register-staff")}>Register as Staff</button>
        </div>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterRole;