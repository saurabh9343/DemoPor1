import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const admin = localStorage.getItem("adminData");
  return admin ? children : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoute;
