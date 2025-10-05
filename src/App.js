import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterRole from "./pages/RegisterRole";
import StudentRegister from "./pages/StudentRegister";
import Home from "./pages/Home"; // import Home page
import StaffRegister from "./pages/StaffRegister"; 
import AluminiRegister from "./pages/AluminiRegister";
import AdminDashboard from "./pages/AdminDashoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register-role" element={<RegisterRole />} />
        <Route path="/register-student" element={<StudentRegister />} />
         <Route path="/register-staff" element={<StaffRegister />} />
         <Route path="/register-alumni" element={<AluminiRegister />} />
        <Route path="/home" element={<Home />} /> {/* Home page route */}
        {/* Later you can add /register-alumni and /register-staff */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
