import React, { useState } from "react";
import "./Navbar.css";
import Media from "react-media";

export default function Navbar() {
  const [check, setCheck] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-img">
        <img src="/assets/desktop/logo.svg" alt="Logo" />
      </div>

      <Media query="(max-width: 768px)">
        {(matches) => {
          return matches ? (
            <div className="mobile-navbar">
              <button
                onClick={() => setCheck((prevState) => !prevState)}
                className={`hamburger hamburger--spin ${
                  check ? "is-active" : null
                }`}
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>

              <div
                style={check ? null : { display: "none" }}
                className="mobile-navbar-link"
              >
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Projects</a>

                <button>Schedule a call</button>
              </div>
            </div>
          ) : (
            <div className="navbar-link">
              <a href="#">About</a>
              <a href="#">Service</a>
              <a href="#">Projects</a>
              <a href="">
                <button>Schedule a call</button>
              </a>
            </div>
          );
        }}
      </Media>
    </div>
  );
}
