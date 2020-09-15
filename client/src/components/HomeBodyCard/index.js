import React from "react";
import "./styles.css";

function HomeBodyCard(props) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body ">
        <ul uk-accordion="true" className="card-collapsible-main">
          <li>
            <h3 className="uk-card-title uk-accordion-title card-collapsible-header">
              {props.name}
            </h3>
            <p className="uk-accordion-content">
              {props.highlights.map((item) => {
                return (
                  <>
                    <a
                      className="home-card-li"
                      href={`#${item.toLowerCase().split(" ").join("_")}`}
                    >
                      {item}
                    </a>
                    <br />
                  </>
                );
              })}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeBodyCard;
