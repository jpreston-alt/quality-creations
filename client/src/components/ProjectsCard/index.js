import React from "react";
import "./styles.css";

function ProjectsCard(props) {
  return (
    <div class="uk-text-center">
      <div class="uk-inline-clip uk-transition-toggle project-container" tabindex="0">
        <img src={props.image} alt="project-image" className="project-image" />
        <div class="uk-transition-slide-top uk-position-top uk-overlay uk-overlay-default project-overlay">
          <div class="project-info">
            <a href={props.link} className="project-link"><h3 class="project-name">{props.name}</h3></a>
            <p className="project-description">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsCard;
