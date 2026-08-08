import React from "react";

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-dot"></span>
            ResumeAI
          </div>

          <p>
            AI-powered resume analysis and interview preparation
            for developers and freshers.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/y1179/resume-analyser-fr"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yas-patle"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ResumeAI. All rights reserved.
        </span>

        <span>
          Built with React + Node.js + AI
        </span>
      </div>
    </footer>
  );
};

export default Footer;