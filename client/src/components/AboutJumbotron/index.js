import React from "react";
import "./style.css";
import image from "../../assets/images/aboutnav.jpg";

function AboutJumbotron() {
  return (
    <div className="about-jumbotron-container">
      <img className="about-jumbotron-image" src={image} />
      <h2 className="about-jumbotron-text">WHO WE ARE</h2>
    </div>
  );
}

export default AboutJumbotron;
