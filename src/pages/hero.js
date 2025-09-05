// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className="home-hero">
      <div className="home-overlay">
        <h1>Welcome to Car Rada 🚘</h1>
        <p>
          Stay ahead of traffic, get real-time updates, update fellow motorists on areas with traffic
          and find the best alternative routes across Kenya.
        </p>
        <Link to="/trafficform" className="cta-btn">
          Check for traffic
        </Link>
        <Link to='/update' className="btn-right">
         Update traffic
        </Link>
      </div>
    </div>
  );
}

export default Hero;
