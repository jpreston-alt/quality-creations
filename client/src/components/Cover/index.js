import React from "react";
import "./style.css";
import Navbar from "../Navbar";

function Cover(props) {
    return (
        <div className="pic-container">
            {/* <Navbar /> */}
            <div className="overlay" style={{ backgroundColor: props.color }}></div>
            <img src={props.image} alt="computer" className="cover-image" />
            <div className={`page-heading-container ${props.justify}`} style={{ right: props.right, left: props.left }}>
                <h1 className="page-heading" style={{ color: props.textColor }}>{props.heading}</h1>
                <h5 className="page-subtitle" style={{ color: props.textColor }}>{props.subtitle}</h5>
            </div>
        </div>
    )
};

export default Cover;