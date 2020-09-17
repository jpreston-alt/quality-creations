import React from "react";

function HomeEmploymentFormSpecialty(props) {
  return (
    <div class="uk-margin uk-width-expands">
      <div
        uk-form-custom="target: > * > span:first-child"
        className="uk-width-expands"
      >
        <select
          name="employeeSpecialty"
          className="uk-width-expands"
          onChange={props.addData}
        >
          <option value="" disabled="true">
            Specialty...
          </option>
          <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
          <option value="designer">Designer</option>
          <option value="full-stack-developer">Full Stack Developer</option>
          <option value="mobile-developer">Mobile Developer</option>
          <option value="back-end-developer">Back End Developer</option>
        </select>
        <button
          class="uk-button uk-button-default uk-width-expands employment-form-input"
          type="button"
          tabindex="-1"
          style={{ textAlign: "left" }}
        >
          <span></span>
          <span uk-icon="icon: chevron-down"></span>
        </button>
      </div>
    </div>
  );
}

export default HomeEmploymentFormSpecialty;
