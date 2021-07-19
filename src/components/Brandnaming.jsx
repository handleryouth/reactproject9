import React from "react";
import "./Brandnaming.css"

export default function Brandnaming() {
  return (
    <div className="brandnaming">
      <div className="brandnaming-description">
        <h1>
          Brand naming & <span>guidelines</span>
        </h1>

        <div className="arrow-container">
          <img src="/assets/desktop/icon-arrow-previous.svg" alt="Previous" />

          <img src="/assets/desktop/icon-arrow-next.svg" alt="Next" />
        </div>
      </div>

      <div className="brand-image">
        <img src="/assets/desktop/image-slide-1.jpg" alt="Illustration" />
      </div>
    </div>
  );
}
