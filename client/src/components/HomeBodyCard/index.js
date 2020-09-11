import React from "react";
import "./styles.css";

function HomeBodyCard(props) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 className="uk-card-title">{props.name}</h3>
        <ul>
          {props.highlights.map((item) => {
            return (
              <li>
                <a
                  className="home-card-li"
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
