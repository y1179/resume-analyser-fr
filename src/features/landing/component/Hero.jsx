import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background glow */}
      <div className="hero-glow"></div>

      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>

          AI-Powered · Built for Freshers · Free
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          Know Exactly Why
          <br />

          You're{" "}

          <span className="accent-word">
            Not Getting Hired
          </span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          Upload your resume and job description to get an
          AI match score, skill gap analysis, personalised
          interview questions, and a learning roadmap.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <Link
            to="/login"
            className="btn btn-primary"
          >
            ✦ Analyze My Resume
          </Link>

          <a
            href="#how"
            className="btn btn-secondary"
          >
            See How It Works
          </a>

        </div>

        {/* =========================
            MOCK ANALYZER CARD
        ========================= */}

        <div className="mock-card">

          {/* Browser header */}
          <div className="mock-header">

            <span
              className="mock-dot"
              style={{ background: "#F87171" }}
            />

            <span
              className="mock-dot"
              style={{ background: "#FBBF24" }}
            />

            <span
              className="mock-dot"
              style={{ background: "#10B981" }}
            />

            <div className="mock-url">
              resumeai.app/analyzer
            </div>

          </div>

          {/* Card body */}
          <div className="mock-body">

            <div className="score-row">

              <div>
                <div className="score-label">
                  Resume Match Score
                </div>

                <div className="score-role">
                  React Developer
                </div>
              </div>

              <div className="score-number">
                72%
              </div>

            </div>

            {/* Score progress */}
            <div className="score-bar">
              <div className="score-fill"></div>
            </div>

            {/* Skills */}
            <div className="skill-title">
              Skill Analysis
            </div>

            <div className="skills-grid">

              <div className="skill skill-missing">
                ✕ TypeScript
              </div>

              <div className="skill skill-have">
                ✓ React.js
              </div>

              <div className="skill skill-missing">
                ✕ Next.js
              </div>

              <div className="skill skill-have">
                ✓ Node.js
              </div>

              <div className="skill skill-missing">
                ✕ Redux
              </div>

              <div className="skill skill-have">
                ✓ MongoDB
              </div>

            </div>

          </div>

          {/* Card footer */}
          <div className="mock-footer">

            <span className="ai-pill">
              AI Powered
            </span>

            <span>
              Analysis complete · Interview questions ready
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;