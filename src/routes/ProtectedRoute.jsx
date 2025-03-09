import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { state } = useAuth();

  // Debugging: Check authentication state
  console.log("Auth State:", state);

  return state.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
