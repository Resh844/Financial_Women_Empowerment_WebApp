import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FinanceEducator.css";

const BusinessGuide = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const sections = [
    {
      title: "📊 Basics of Financial Education",
      description: `Understanding money management, savings, and investments is important for financial growth.`,
      steps: [
        "What is financial literacy and why is it important?",
        "How to create a simple budget for household and business expenses",
        "Understanding savings, interest, and bank accounts",
        "Basics of loans and government financial schemes",
        "How to avoid fraud and make safe transactions"
      ],
      videoLink: "https://www.youtube.com/embed/XVv5ZL9nlgs"
    },
    {
      title: "🐄 Dairy Farming Business",
      description: `Dairy farming is one of the most profitable businesses in rural areas.`,
      steps: [
        "Choose a good breed (Jersey, Holstein, Murrah, etc.)",
        "Set up a hygienic shed and proper ventilation",
        "Feed cows properly for better milk production",
        "Learn about milk collection and selling",
        "Apply for government support schemes"
      ],
      videoLink: "https://www.youtube.com/embed/EmB9JtvzWvc"
    },
    {
      title: "📜 Government Schemes for Women Entrepreneurs",
      description: `Many government programs provide financial aid, training, and loans for women entrepreneurs.`,
      steps: [
        "Mudra Loan Scheme for Small Businesses",
        "Mahila Udyam Nidhi Scheme for startups",
        "Annapurna Scheme for food-based businesses",
        "Government subsidies for dairy, poultry, and farming",
        "How to apply for financial aid online"
      ],
      videoLink: "https://www.youtube.com/embed/kXz1jtTzcnA"
    },
    {
      title: "🌟 Success Stories of Rural Women Entrepreneurs",
      description: `Get inspired by real women who built successful businesses from scratch!`,
      steps: [
        "Geeta Devi – Built a successful dairy farm in Rajasthan",
        "Sangeeta – Started a small clothing business and grew online",
        "Lakshmi Bai – Used micro-loans to create a poultry business",
        "Meera – Launched a honey production business with government help",
        "How YOU can become the next success story!"
      ],
      videoLink: "https://www.youtube.com/embed/oehxTlh3YMo"
    }
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="business-guide-container">
      <h2>🌱 How to Start Your Own Business & Learn Financial Skills</h2>
      <p>Explore step-by-step guides for business and financial education.</p>

      {sections.map((section, index) => (
        <div key={index} className={`business-item ${openIndex === index ? "active" : ""}`}>
          <div className="business-title" onClick={() => toggleSection(index)}>
            {section.title}
            <span className="icon">{openIndex === index ? "🔽" : "▶️"}</span>
          </div>
          {openIndex === index && (
            <div className="business-content">
              <p>{section.description}</p>
              <ul>
                {section.steps.map((step, i) => (
                  <li key={i}>✅ {step}</li>
                ))}
              </ul>
              <p>📺 Learn more:</p>
              <iframe
                width="100%"
                height="250"
                src={section.videoLink}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}

      {/* Interactive Quiz Section */}
      <div className="quiz-section">
        <h3>🧠 Quick Financial Literacy Quiz</h3>
        <p>Test your knowledge about financial management and business!</p>

        <button className="quiz-btn" onClick={() => navigate("/quiz")}>
          Take the Quiz
        </button>
      </div>

      {/* AI Chatbot Section */}
      <div className="chatbot-section">
        <h3>🤖 Ask Our AI Chatbot</h3>
        <p>Have questions about starting a business? Ask our AI-powered assistant.</p>
        <button className="chatbot-btn">Chat Now</button>
      </div>

      {/* Business Plan Generator */}
      <div className="business-plan-section">
        <h3>📈 AI-Powered Business Plan Generator</h3>
        <p>Get a customized business plan based on your interests and financial situation.</p>
        <button className="generate-btn" onClick={() => navigate("/PlanGenerator")}>
        Generate Plan
        </button>
      </div>

      {/* Local Success Stories Map */}
      <div className="success-map-section">
        <h3>📍 Find Local Women Entrepreneurs</h3>
        <p>See success stories from women entrepreneurs in your area.</p>
        <button className="map-btn">View Map</button>
      </div>

      {/* WhatsApp Group Link */}
      <div className="whatsapp-section">
        <h3>📲 Join Our WhatsApp Business Community</h3>
        <p>Connect with other women entrepreneurs and get real-time support.</p>
        <a href="https://chat.whatsapp.com/example" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-btn">Join Now</button>
        </a>
      </div>

      {/* Download Section */}
      <div className="download-section">
        <h3>📥 Download Business Guides</h3>
        <p>Get step-by-step PDF guides for free.</p>
        <a href="/business-guide.pdf" download>
          <button className="download-btn">Download Now</button>
        </a>
      </div>
    </div>
  );
};

export default BusinessGuide;
