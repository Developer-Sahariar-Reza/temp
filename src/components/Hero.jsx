import React from "react";
import Lottie from "lottie-react";
import jobAnime from "../assets/animation/anime.json";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero-info">
        <h1>One Step</h1>
        <h1>Closer To Your</h1>
        <h1 className="hero-h1">Dream Job</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="common-button">Get Started</button>
      </div>
      <div className="hero-animation">
        <Lottie animationData={jobAnime} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
