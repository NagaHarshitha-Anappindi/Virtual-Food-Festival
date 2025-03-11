import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import LandingPage from "../Components/LandingPage";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";

const AppRouter = () => {
  useEffect(() => {
    !!localStorage.getItem("user"); // This runs but is not stored
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
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
