import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import LandingPage from "../Components/LandingPage";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";

const AppRouter = () => {   
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        {/* Home route now renders the LandingPage */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
