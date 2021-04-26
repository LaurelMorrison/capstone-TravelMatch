import React from "react";
import "./home.css";

export const Homepage = () => {

  return (
    <>
      <div className="grid-container">
        <div className="item1 title">
          <h1>Planning a trip with nowhere to go?</h1>
          <button>Take the quiz</button>
        </div>
        <div>
          <p>TravelMatch wants to match you to the right destination. There are thousands of trips, we just need to find your perfect one.</p>
        </div>
        <div>
          <h3>Three easy steps to get started</h3>
          <ul>
            <li>Take the travel quiz and enter your trip’s criteria.</li>
            <li>Sort through the potential destination matches and find your dream spot.</li>
            <li>Save your trip and get ready for an adventure.</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};