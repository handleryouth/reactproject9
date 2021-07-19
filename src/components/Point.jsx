import React from "react";
import "./Point.css"

export default function Point(props) {
  return (
    <div className="point">
        <h1>{props.number}</h1>
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
    </div>
  );
}
