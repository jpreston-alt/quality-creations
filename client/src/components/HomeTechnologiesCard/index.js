import React from "react";
import "./styles.css";
function HomeTechnologiesCard(props) {
  return (
    <div class="background-image-technologies">
      <div
        class="uk-card uk-card-default uk-card-body background-image-technologies-card"
        style={{
          backgroundImage: `url(${props.src})`,
        }}
      >
        <a href={`#${props.name.toLowerCase().split(" ").join("_")}`}>
          <p className="home-tech-header">{props.name}</p>
        </a>
      </div>
    </div>
  );
}

export default HomeTechnologiesCard;
