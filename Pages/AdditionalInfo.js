import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdditionalInfo.css"; 

const AdditionalInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const [formData, setFormData] = useState({
    dob: "",
    phone: "",
    address: "",
    education: "",
    maritalStatus: "",
    pincode: "",
    country: "",
    occupation: "",
    annualIncome: "",
    dependents: "",
    interestedField: "",
    // financialKnowledge: "",
    financialGoals: "",
    savingsPlan: "",
    investmentPlan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine user credentials and form data
    const userData = { email, password, ...formData };

    // Redirect to dashboard with user data
    navigate("/dashboard", { state: userData });
  };

  return (
    <div className="additional-info-page">
      <h2>Complete Your Profile</h2>
      <div className="additional-info-container">
        <div className="info-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Education Level</label>
            <select name="education" value={formData.education} onChange={handleChange} required>
              <option value="">Select Education Level</option>
              <option value="No Formal Education">No Formal Education</option>
              <option value="Primary School">Primary School</option>
              <option value="High School">High School</option>
              <option value="College">College</option>
            </select>
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} required />
          </div>
        </div>

        <div className="info-section">
          <h3>Financial Information</h3>
          <div className="form-group">
            <label>Occupation</label>
            <select name="occupation" value={formData.occupation} onChange={handleChange} required>
              <option value="">Select Occupation</option>
              <option value="Farmer">Farmer</option>
              <option value="Tailor">Tailor</option>
              <option value="Small Business Owner">Small Business Owner</option>
              <option value="Housewife">Housewife</option>
            </select>
          </div>
          <div className="form-group">
            <label>Annual Income</label>
            <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Number of Dependents</label>
            <input type="number" name="dependents" value={formData.dependents} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Interested Field</label>
            <select name="interestedField" value={formData.interestedField} onChange={handleChange} required>
              <option value="">Select Field</option>
              <option value="Investment">Investment</option>
              <option value="Savings">Savings</option>
              <option value="Insurance">Insurance</option>
              <option value="Business Expansion">Business Expansion</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label>Financial Knowledge</label>
            <input type="text" name="financialKnowledge" value={formData.financialKnowledge} onChange={handleChange} required />
          </div> */}
          <div className="form-group">
            <label>Financial Goals</label>
            <textarea name="financialGoals" value={formData.financialGoals} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Savings Plan</label>
            <input type="text" name="savingsPlan" value={formData.savingsPlan} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Investment Plan</label>
            <input type="text" name="investmentPlan" value={formData.investmentPlan} onChange={handleChange} required />
          </div>
        </div>
      </div>

      <div className="submit-container">
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
