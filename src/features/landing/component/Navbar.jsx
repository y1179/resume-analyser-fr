import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="landing-nav">
      {/* Logo */}
      <Link to="/" className="landing-logo">
        <span className="logo-dot"></span>
        ResumeAI
      </Link>

      {/* Navigation */}
      <div className="landing-nav-actions">
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>

        <Link to="/register" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;