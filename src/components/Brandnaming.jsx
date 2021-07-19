import React, { useState } from "react";
import "./Brandnaming.css";
import brand from "./Brandlist";

export default function Brandnaming() {
  const [list, setList] = useState(0);

  function IncreaseNumber() {
    setList((prevState) => (prevState + 1 === 3 ? 0 : prevState + 1));
  }

  function DecreaseNumber() {
    setList((prevState) => (prevState - 1 === -1 ? 2 : prevState - 1));
  }

  return (
    <div className="brandnaming">
      <div className="brandnaming-description">
        <h1>
          Brand naming & <span>{brand[list].title}</span>
        </h1>

        <div className="arrow-container">
          <img
            onClick={DecreaseNumber}
            src="/assets/desktop/icon-arrow-previous.svg"
            alt="Previous"
          />

          <img
            onClick={IncreaseNumber}
            src="/assets/desktop/icon-arrow-next.svg"
            alt="Next"
          />
        </div>
      </div>

      <div className="brand-image">
        <img src={brand[list].image} alt="Illustration" />
      </div>
    </div>
  );
}
