// import React from "react";

// const features = [
//   {
//     icon: "🎯",
//     title: "AI Match Score",
//     description:
//       "Get a score showing how closely your resume matches the job description.",
//     wide: true,
//     bars: [
//       { label: "React Skills", value: 82 },
//       { label: "Backend", value: 67 },
//       { label: "TypeScript", value: 12 },
//     ],
//   },
//   {
//     icon: "🧠",
//     title: "Skill Gap Analysis",
//     description:
//       "Find the exact skills you're missing for your target role and understand what to learn next.",
//   },
//   {
//     icon: "💬",
//     title: "Interview Questions",
//     description:
//       "Get personalized technical and behavioral questions based on your resume and target job.",
//   },
//   {
//     icon: "🗺️",
//     title: "Learning Roadmap",
//     description:
//       "Follow a practical step-by-step roadmap to close your skill gaps efficiently.",
//   },
//   {
//     icon: "🔍",
//     title: "RAG-Powered Analysis",
//     description:
//       "Use semantic search and relevant job data to make your resume analysis more context-aware.",
//     wide: true,
//   },
// ];

// const Features = () => {
//   return (
//     <section className="features-section">
//       <div className="section-eyebrow">
//         Features
//       </div>

//       <h2 className="section-title">
//         Everything you need to prepare smarter
//       </h2>

//       <p className="section-subtitle">
//         From resume analysis to interview preparation,
//         get the tools you need to become job-ready.
//       </p>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div
//             className={`feature-card ${
//               feature.wide ? "feature-wide" : ""
//             }`}
//             key={index}
//           >
//             <div className="feature-icon">
//               {feature.icon}
//             </div>

//             <h3 className="feature-title">
//               {feature.title}
//             </h3>

//             <p className="feature-description">
//               {feature.description}
//             </p>

//             {feature.bars && (
//               <div className="feature-score">
//                 {feature.bars.map((bar) => (
//                   <div className="mini-bar-row" key={bar.label}>
//                     <span className="mini-bar-label">
//                       {bar.label}
//                     </span>

//                     <div className="mini-bar-background">
//                       <div
//                         className="mini-bar-fill"
//                         style={{
//                           width: `${bar.value}%`,
//                         }}
//                       />
//                     </div>

//                     <span className="mini-bar-value">
//                       {bar.value}%
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;
import React from "react";

const features = [
  {
    icon: "🎯",
    title: "AI Match Score",
    description:
      "Paste your resume and any job description — get a precise score out of 100 showing exactly how well you match that specific role.",
    wide: true,
    bars: [
      { label: "React Skills", value: 82, color: "#818cf8" },
      { label: "Backend",      value: 67, color: "#818cf8" },
      { label: "TypeScript",   value: 12, color: "#f87171" },
    ],
  },
  {
    icon: "🧠",
    title: "Skill Gap Analysis",
    description:
      "Know exactly which skills from the JD are missing in your resume — and what to learn to close the gap fast.",
  },
  {
    icon: "💬",
    title: "Interview Questions",
    description:
      "5 personalised technical and HR questions generated from your specific resume and the job description you pasted.",
  },
  {
    icon: "🗺️",
    title: "Learning Roadmap",
    description:
      "Step-by-step plan to close your skill gaps in the fastest order — specific to the JD you are targeting.",
  },
  {
    icon: "🔍",
    title: "Works With Any Job Description",
    description:
      "No dropdowns, no predefined roles. Copy any JD from LinkedIn, Naukri, or a company website — paste it in and get analysis specific to that exact role.",
    wide: true,
  },
];

const Features = () => {
  return (
    <section className="features-section">

      <div className="features-header">
        <div className="section-eyebrow">Features</div>

        <h2 className="section-title">
          Everything you need to{" "}
          <span className="accent-word">prepare smarter</span>
        </h2>

        <p className="section-subtitle">
          From resume analysis to interview prep — everything your
          fresher job search needs, in one free tool.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card${feature.wide ? " feature-wide" : ""}`}
          >
            <div className="feature-icon">{feature.icon}</div>

            <h3 className="feature-title">{feature.title}</h3>

            <p className="feature-description">{feature.description}</p>

            {feature.bars && (
              <div className="feature-score">
                {feature.bars.map((bar) => (
                  <div className="mini-bar-row" key={bar.label}>
                    <span className="mini-bar-label">{bar.label}</span>
                    <div className="mini-bar-background">
                      <div
                        className="mini-bar-fill"
                        style={{
                          width: `${bar.value}%`,
                          background: bar.value < 30
                            ? "linear-gradient(90deg,#f87171,#ef4444)"
                            : "linear-gradient(90deg,#6366f1,#8b5cf6)",
                        }}
                      />
                    </div>
                    <span
                      className="mini-bar-value"
                      style={{ color: bar.value < 30 ? "#f87171" : "#818cf8" }}
                    >
                      {bar.value}%
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Features;