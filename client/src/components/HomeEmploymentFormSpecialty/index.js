import React from "react";

function HomeEmploymentFormSpecialty() {
  return (
    <div class="uk-margin uk-width-expands">
      <div uk-form-custom="target: > * > span:first-child" className="uk-width-expands">
        <select className="uk-width-expands">
          <option value="" disabled="true">
            Specialty...
          </option>
          <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
          <option value="1">Designer</option>
          <option value="2">Full Stack Developer</option>
          <option value="3">Mobile Developer</option>
          <option value="4">Back End Developer</option>
        </select>
        <button class="uk-button uk-button-default uk-width-expands employment-form-input" type="button" tabindex="-1" style={{ textAlign: "left" }}>
          <span></span>
          <span uk-icon="icon: chevron-down"></span>
        </button>
      </div>
    </div>
  );
}

export default HomeEmploymentFormSpecialty;
