import React from "react";
import "./style.css";

function ServicesCard(props) {
    return (

        <div>
            <div class="uk-card uk-card-default uk-card-body services-card">
                <h3 className="services-card-header">{props.title}</h3>
                <span uk-icon={`icon: ${props.icon}; ratio: 1.2`} className="services-card-icon"></span>
                <p className="services-card-p uk-text-justify">
                    {props.description}
                </p>
            </div>
        </div>
    )
};
export default ServicesCard;