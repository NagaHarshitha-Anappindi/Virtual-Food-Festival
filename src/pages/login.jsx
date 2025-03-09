import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDeACfault();

    // Get registered users from local storage (or use an API if available)
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const user = registeredUsers.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      // Save user session
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid username or password. Please register first.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;
