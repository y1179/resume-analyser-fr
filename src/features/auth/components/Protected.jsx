import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Protected = ({ children }) => {
  const { user, loading } = useAuth();

  // ← Wait for session restore to finish before checking user
  if (loading) {
    return (
      <main className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </main>
    );
  }

  // Session checked — no user found, go to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User exists — render the protected page
  return children;
};

export default Protected;