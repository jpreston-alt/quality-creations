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
          <div class="uk-transition-slide-top uk-position-top uk-overlay uk-overlay-default project-overlay">
            <div class="project-info">
              <a href={props.link} className="project-link">
                <h3 class="project-name">{props.name}</h3>
              </a>
              <p className="project-description">{props.description}</p>
              {/* Modal Chip */}
              <a
                class="uk-button uk-button-default projects-modal"
                href={`#${props.name.toLowerCase().split(" ").join("_")}`}
                uk-toggle
              >
                <div className="chip">
                  <div className="logo">{props.initial}</div>
                  John Doe
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id={`${props.name.toLowerCase().split(" ").join("_")}`}
        class="uk-flex-top"
        uk-modal="true"
      >
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default projects-modal"
            type="button"
            uk-close="true"
          ></button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}
export default ProjectsCard;
