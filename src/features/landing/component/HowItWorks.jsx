import React from "react";

const steps = [
  {
    number: "01",
    icon: "📄",
    title: "Paste your resume",
    description:
      "Copy your resume text into the input box. Plain text works perfectly — no PDF upload needed.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Paste the job description",
    description:
      "Copy the full JD from LinkedIn, Naukri, or any job portal and paste it into the second box.",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Get your AI analysis",
    description:
      "Receive a match score, missing skills, personalised interview questions, and a learning roadmap — in 10 seconds.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Fix and reapply",
    description:
      "Follow your personalised roadmap, update your resume based on the gaps, and apply with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section" id="how">

      <div className="how-header">
        <div className="section-eyebrow">How it works</div>

        <h2 className="section-title">
          From resume to <span className="accent-word">interview-ready</span>
        </h2>

        <p className="section-subtitle">
          Just two inputs — your resume and any job description.
          We handle the rest.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={step.number}>

            {/* connector line between cards — hidden on last */}
            {index < steps.length - 1 && (
              <div className="step-connector" aria-hidden="true" />
            )}

            <div className="step-top">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">Step {step.number}</div>
            </div>

            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;