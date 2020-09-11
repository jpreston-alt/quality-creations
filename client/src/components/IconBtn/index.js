import React from "react";
import "./styles.css";

function IconBtn(props) {
  return (
    <button className="icon-btn" onClick={props.onClick}>
      <span uk-icon={`icon: ${props.icon}; ratio: ${props.ratio}`}></span>
    </button>
  );
}

export default IconBtn;
