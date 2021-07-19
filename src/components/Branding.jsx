import React from "react";
import "./Branding.css"

export default function Branding() {
  return (
    <div className="branding">
      <div className="branding-title">
        <h1>Branding & website design agency</h1>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button>Learn More</button>
      </div>

      <div>
          <img src="/assets/desktop/image-hero.jpg" alt="illustration" />
      </div>
    </div>
  );
}
