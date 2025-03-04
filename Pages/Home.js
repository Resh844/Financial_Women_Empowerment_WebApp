import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Chatbot from "../components/chatbot";

const Home = () => {
  
  return (

    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Empower Your Finances with AI</h1>
        <p>Smart budgeting, investments, and financial literacy at your fingertips.</p>
        <Link to="/login" className="cta-button">Get Started</Link>
      </section>

      <div>
        <h1>Welcome to Women Financial WebApp</h1>
        <Chatbot /> {/* Chatbot Component */}
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Platform?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>📊 AI-Powered Budgeting</h3>
            <p>Get personalized insights on your spending habits.</p>
          </div>
          <div className="feature-card">
            <h3>📈 Smart Investment Tracking</h3>
            <p>Monitor and optimize your investments easily.</p>
          </div>
          <div className="feature-card">
            <h3>🎓 Financial Literacy</h3>
            <p>Learn financial concepts with interactive content.</p>
          </div>
          <div className="feature-card">
            <h3>🗣 Multilingual Support</h3>
            <p>Access financial education in multiple Indian languages.</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Micro-Investment Opportunities</h3>
            <p>Start investing with small amounts safely and securely.</p>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      {/* <section className="chatbot-section">
        <h2>Need Help? Ask Our AI Advisor</h2>
        <p>Get instant financial guidance from our AI-powered assistant.</p>
        <Link to="/chatbot" className="cta-button">Try Chatbot</Link>
      </section> */}

      {/* Gamified Learning Section */}
      <section className="gamified-learning">
        <h2>Interactive Financial Challenges</h2>
        <p>Play quizzes and challenges to boost your financial knowledge.</p>
        <Link to="/challenges" className="cta-button">Start Now</Link>
      </section>

      {/* Women Empowerment Section */}
      <section className="women-empowerment">
        <h2>Special Financial Schemes for Women</h2>
        <p>Explore government and private schemes designed for women.</p>
        <Link to="/women-finance" className="cta-button">Learn More</Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"This app transformed how I manage my money! Highly recommend it."</p>
            <h4>- Priya R.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The AI budgeting tool helped me save 20% more each month!"</p>
            <h4>- Arjun K.</h4>
          </div>
        </div>
      </section>

      {/* Financial News Section */}
      <section className="news-section">
        <h2>Latest Financial News</h2>
        <ul className="news-list">
          <li>🔹 <Link to="/news/stock-market">Stock markets hit an all-time high today!</Link></li>
          <li>🔹 <Link to="/news/tech-investments">New investment opportunities in tech startups.</Link></li>
          <li>🔹 <Link to="/news/rural-finance">Government announces new financial schemes for rural areas.</Link></li>
        </ul>
      </section>

    </div>

    

  );
};

export default Home;
