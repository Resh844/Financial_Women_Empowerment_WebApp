import React, { useState } from "react";
import "./PlanGenerator.css";

const PlanGenerator = () => {
  const [businessType, setBusinessType] = useState("");
  const [generatedPlan, setGeneratedPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneratePlan = async () => {
    if (!businessType.trim()) {
      alert("Please enter a business idea!");
      return;
    }

    setLoading(true);

    try {
      // Replace this with your actual AI API endpoint
      const response = await fetch("https://your-ai-api.com/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ businessType }),
      });

      const data = await response.json();
      setGeneratedPlan(data.plan || "Could not generate a business plan.");
    } catch (error) {
      setGeneratedPlan("Error generating business plan. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="business-plan-container">
      <h2>📜 AI-Powered Business Plan Generator</h2>
      <p>Enter your business idea, and let AI generate a structured business plan for you.</p>

      <input
        type="text"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        placeholder="E.g., Organic Farming Business"
        className="business-input"
      />

      <button onClick={handleGeneratePlan} disabled={loading} className="generate-btn">
        {loading ? "Generating..." : "Generate Plan"}
      </button>

      {generatedPlan && (
        <div className="plan-output">
          <h3>📑 Your Business Plan</h3>
          <p>{generatedPlan}</p>
        </div>
      )}
    </div>
  );
};

export default PlanGenerator;
