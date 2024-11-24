import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// ProtectedRoute component to handle the redirection based on authentication and role
const ProtectedRoute = ({ children, requiredRole, userRole, ...rest }) => {
  // If the user is not logged in or does not have the required role, redirect to home/login
  if (!userRole || userRole !== requiredRole) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={children} />;
};

export default ProtectedRoute;
