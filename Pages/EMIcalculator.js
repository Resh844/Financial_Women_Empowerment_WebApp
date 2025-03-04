import React, { useState } from "react";
import "./EMIcalculator.css";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const calculateEMI = () => {
    const r = interestRate / 100 / 12;
    const n = loanTenure * 12;
    const emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="emi-calculator-container">
      <h2>EMI Calculator</h2>

      <label>Loan Amount:</label>
      <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />

      <label>Annual Interest Rate (%):</label>
      <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

      <label>Loan Tenure (Years):</label>
      <input type="number" value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)} />

      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi && <h3>Monthly EMI: ₹{emi}</h3>}

      {/* Button to Show Video */}
      <button className="video-btn" onClick={() => setShowVideo(true)}>📹 How is EMI Calculated?</button>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <span className="close-btn" onClick={() => setShowVideo(false)}>&times;</span>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/results?search_query=how+to+calacualte+EMI"
              title="How to Calculate EMI"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
