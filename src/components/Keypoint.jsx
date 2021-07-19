import React from "react";
import Point from "./Point";
import "./Keypoint.css"

export default function Keypoint() {
  return (
    <div className="keypoint">
      <div className="keypoint-header">
        <h1>Our approach for creating a winning brand</h1>
      </div>

      <div className="keypoint-content">
        <Point
          number="01"
          title="Brand Strategy"
          description="Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key."
        />

        <Point
          number="02"
          title="Brand Design"
          description="Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively."
        />

        <Point
          number="03"
          title="Web Design"
          description="A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues."
        />
      </div>
    </div>
  );
}
