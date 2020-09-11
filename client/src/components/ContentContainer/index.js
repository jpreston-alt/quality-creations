import React from "react";
import "./style.css";

function ContentContainer(props) {
    return (
        <div className="uk-container content-container" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500;">
            {props.children}
        </div>
    )
};

export default ContentContainer;