import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"; // Ensure consistent styling
import ProfileImage from "../images/logo_new.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="nav-title">
      <img src={ProfileImage} alt="FinWise Logo" className="logo" /></h2>
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/emi-cal" className="nav-link">EMI Calculator</Link></li>
        <li><Link to="/sip-cal" className="nav-link">SIP Calculator</Link></li>
        <li><Link to="/fin-edu" className="nav-link">Finance Educator</Link></li>
        <li><Link to="/Budget" className="nav-link">Budgeting</Link></li>

        {!user ? (
          <li>
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
            {/* <button onClick={() => navigate("/register")} className="register-btn">
              Register
            </button> */}
          </li>
        ) : (
          <>
            <li><span className="welcome-text">👋 Welcome, {user.name}</span></li>
            <li>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
