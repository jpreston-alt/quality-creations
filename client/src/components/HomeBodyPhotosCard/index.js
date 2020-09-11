import React from "react";
import "./styles.css";

function HomeBodyPhotosCard(props) {
  return (
    <li>
      <div className="uk-panel main-photo-container">
        <img className="image" src={props.image} alt="" />
        <div className="middle">
          <a href={props.link} target="_blank" className="text">
            {props.name}
          </a>
        </div>
      </div>
    </li>
  );
}
export default HomeBodyPhotosCard;
