import React from "react";
import "./styles.css";

function ProjectsCard(props) {
  return (
    <>
      <div class="uk-text-center">
        <div
          class="uk-inline-clip uk-transition-toggle project-container"
          tabindex="0"
        >
          <img
            src={props.image}
            alt="project-image"
            className="project-image"
          />
          <div class="uk-transition-slide-top uk-position-top uk-overlay uk-overlay-default project-overlay projects-modal">
            <div class="project-info">
              <a href={props.link} className="project-link">
                <h3 class="project-name">{props.name}</h3>
              </a>
              <p className="project-description">{props.description}</p>
              {/* Modal Chip */}
              <a
                class="project-website-link-icon"
                href={props.link}
                title="Website"
              >
                <span uk-icon="icon: world; ratio: 2"></span>
              </a>
              <span
                className="project-modal-link-icon"
                uk-icon="icon: comments; ratio: 2"
                uk-toggle={`target: #${props.name
                  .toLowerCase()
                  .split(" ")
                  .join("_")}`}
                title="Testimony"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        id={`${props.name.toLowerCase().split(" ").join("_")}`}
        uk-modal="true"
      >
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">{props.name}'s Experience</h2>
          <p>{props.testimony}</p>
          <b>
            <p>{props.date}</p>
          </b>
          <p class="uk-text-right">
            <button
              class="uk-button uk-button-primary uk-modal-close"
              type="button"
            >
              Close
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
export default ProjectsCard;
