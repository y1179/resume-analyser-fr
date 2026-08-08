import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta">
        <h2 className="cta-title">
          Your resume is better
          <br />
          than you think.
        </h2>

        <p className="cta-description">
          Find out where you stand, discover your skill gaps,
          and prepare for your next interview with AI.
        </p>

        <Link to="/login" className="cta-button">
          ✦ Analyze My Resume
        </Link>
      </div>
    </section>
  );
};

export default CTA;