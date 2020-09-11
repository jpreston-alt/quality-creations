import React from "react";
import "./style.css";
import image from "../../assets/images/aboutnav.jpg";

function AboutJumbotron() {
  return (
    <div className="about-jumbotron-container">
      <img className="about-jumbotron-image" src={image} />
      <h2 className="about-jumbotron-text">WHO WE ARE</h2>
      <i>
        <a className="about-jumbotron-sub">
          “Mission statement goes here, Lorem ipsum dolor sit ame ”
        </a>
      </i>
    </div>
  );
}

export default AboutJumbotron;
