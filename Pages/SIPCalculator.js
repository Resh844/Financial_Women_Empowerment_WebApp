import React, { useState } from "react";
import "./SIPCalculator.css";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [maturityValue, setMaturityValue] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const calculateSIP = () => {
    const months = years * 12;
    const r = interestRate / 100 / 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    setMaturityValue(futureValue.toFixed(2));
  };

  return (
    <div className="sip-calculator-container">
      <h2>SIP Calculator</h2>

      <label>Monthly Investment (₹):</label>
      <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} />

      <label>Annual Interest Rate (%):</label>
      <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

      <label>Investment Duration (Years):</label>
      <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />

      <button onClick={calculateSIP}>Calculate SPI</button>

      {maturityValue && <h3>Maturity Value: ₹{maturityValue}</h3>}

      {/* Button to Show Video */}
      <button className="video-btn" onClick={() => setShowVideo(true)}>📹 How is SIP Calculated?</button>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <span className="close-btn" onClick={() => setShowVideo(false)}>&times;</span>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/results?search_query=How+to+calculate+SIP"
              title="How to Calculate SIP Returns"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
