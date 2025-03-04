import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Home from "./Pages/Home";
import EMICalculator from "./Pages/EMIcalculator";
import SIPCalculator from "./Pages/SIPCalculator";
import { AuthProvider } from "./context/AuthContext";
import AdditionalInfo from "./Pages/AdditionalInfo";
import FinanceEducator from "./Pages/FinanceEducator";
import QuizPage from "./Pages/QuizPage";
import PlanGenerator from './components/PlanGenerator';
import Budgeting from './Pages/Budgeting';
import Footer from './Pages/Footer';
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sip-cal" element={<SIPCalculator />} />
          <Route path="/emi-cal" element={<EMICalculator />} />
          <Route path="/fin-edu" element={<FinanceEducator />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/additional-info" element={<AdditionalInfo />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/PlanGenerator" element={<PlanGenerator />}/>
          <Route path="/Budget" element={<Budgeting />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;