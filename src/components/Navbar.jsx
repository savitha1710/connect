





import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Get user info from localStorage (adjust key based on your app)
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.name || "U"; // fallback if no user

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // go to login
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">CollegeConnect</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/network">Network</Link></li>
        <li><Link to="/create-post">Create Post</Link></li> {/* new link */}
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
      <div className="profile-icon" title={username}>
        <Link to="/profile" className="profile-link">
          {username.charAt(0).toUpperCase()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
