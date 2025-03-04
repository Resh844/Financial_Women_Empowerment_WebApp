import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // ✅ Fix: Ensure handleChange is defined before use
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(formData.name, formData.email, formData.password);
        // ✅ Redirect new users to AdditionalInfo page
        navigate("/additional-info", { state: { email: formData.email, password: formData.password } });
      } else {
        await login(formData.email, formData.password);
        navigate("/dashboard"); // Redirect existing users to Dashboard
      }
    } catch (error) {
      console.error("Auth failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          )}
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <button type="submit" className="auth-button">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p>
          {isRegister ? "Already have an account? " : "New user? "}
          <button onClick={() => setIsRegister(!isRegister)} className="toggle-button">
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
