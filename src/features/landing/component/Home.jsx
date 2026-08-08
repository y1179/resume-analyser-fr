// import React from "react";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import Stats from "./Stats";
// import HowItWorks from "./HowItWorks";
// import Features from "./Features";
// import CTA from "./CTA";
// import "../landing.scss";

// const Home = () => {
//   return (
//     <div className="landing">

//       <Navbar />

//       <Hero />

//       {/* Stats */}
//       <Stats />
//       {/* How It Works */}
//       <HowItWorks />
//       {/* Features */}
//       <Features />
//       {/* CTA */}
//       <CTA />
//       {/* Footer */}

//     </div>
//   );
// };

// export default Home;

import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";

import "../landing.scss";


const Home = () => {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;