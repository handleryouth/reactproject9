import React from "react";
import Navbar from "./Navbar";
import Branding from "./Branding";
import Strategic from "./Strategic";
import Keypoint from "./Keypoint";
import Brandnaming from "./Brandnaming";
import Footer from "./Footer";
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Branding />
      <Strategic />
      <Keypoint />
      <Brandnaming />
      <Footer />
    </div>
  );
}
