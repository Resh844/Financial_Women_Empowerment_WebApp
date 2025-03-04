import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaChartPie, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Finance Hub</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <FaHome className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className="icon" /> Profile
          </Link>
        </li>
        <li>
          <Link to="/budget">
            <FaChartPie className="icon" /> Budget & Expenses
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog className="icon" /> Settings
          </Link>
        </li>
        <li className="logout">
          <Link to="/logout">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
