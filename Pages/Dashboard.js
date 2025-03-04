import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import profilePic from "../images/ProfileImage.jpg"// Import your image

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state || {};

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || profilePic    // Default profile image
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("profileImage"); // Clear profile image on logout (optional)
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      {/* Profile Section */}
      <div className="profile-card">
        <div className="profile-header">
          <img src={profileImage} alt="User Profile" className="profile-image" />
          <label htmlFor="upload" className="upload-btn">📷 Change Photo</label>
          <input type="file" accept="image/*" id="upload" onChange={handleImageUpload} hidden />
        </div>

        <h2 className="username">{userData.email || "User Name"}</h2>
        <p className="user-occupation">{userData.occupation || "Occupation not provided"}</p>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* User Information Sections */}
      <div className="info-sections">
        {/* Personal Info */}
        <div className="info-card">
          <h3>👤 Personal Information</h3>
          <div className="info-grid">
            <p><strong>DOB:</strong> {userData.dob || "N/A"}</p>
            <p><strong>Phone:</strong> {userData.phone || "N/A"}</p>
            <p><strong>Address:</strong> {userData.address || "N/A"}</p>
            <p><strong>Education:</strong> {userData.education || "N/A"}</p>
            <p><strong>Marital Status:</strong> {userData.maritalStatus || "N/A"}</p>
            <p><strong>Country:</strong> {userData.country || "N/A"}</p>
            <p><strong>Pincode:</strong> {userData.pincode || "N/A"}</p>
          </div>
        </div>

        {/* Financial Info */}
        <div className="info-card">
          <h3>💰 Financial Information</h3>
          <div className="info-grid">
            <p><strong>Annual Income:</strong> {userData.annualIncome || "N/A"}</p>
            <p><strong>Dependents:</strong> {userData.dependents || "N/A"}</p>
            <p><strong>Interested Field:</strong> {userData.interestedField || "N/A"}</p>
            <p><strong>Financial Knowledge:</strong> {userData.financialKnowledge || "N/A"}</p>
            <p><strong>Financial Goals:</strong> {userData.financialGoals || "N/A"}</p>
            <p><strong>Savings Plan:</strong> {userData.savingsPlan || "N/A"}</p>
            <p><strong>Investment Plan:</strong> {userData.investmentPlan || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
