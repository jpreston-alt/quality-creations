import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import AboutJumbotron from "../../components/AboutJumbotron";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutJumbotron />
      <h1>AboutPage</h1>
    </div>
  );
}

export default AboutPage;
