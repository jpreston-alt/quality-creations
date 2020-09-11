import React from "react";
import "./styles.css";

function HomeBodyCard(props) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">
        <ul
          uk-accordion="true"
          className="card-collapsible-main"
          data-uk-nav="{multiple:true}"
        >
          <h3 className="uk-card-title uk-accordion-title">{props.name}</h3>
          {props.highlights.map((item) => {
            return (
              <li>
                <a
                  className="home-card-li uk-accordion-content"
                  href={`#${item.toLowerCase().split(" ").join("_")}`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HomeBodyCard;
