import React from "react";

function HomeEmploymentFormSpecialty() {
  return (
    <div class="uk-margin">
      <div uk-form-custom="target: > * > span:first-child">
        <select>
          <option value="">Please select...</option>
          <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
          <option value="1">Option 01</option>
          <option value="2">Option 02</option>
          <option value="3">Option 03</option>
          <option value="4">Option 04</option>
        </select>
        <button class="uk-button uk-button-default" type="button" tabindex="-1">
          <span></span>
          <span uk-icon="icon: chevron-down"></span>
        </button>
      </div>
    </div>
  );
}

export default HomeEmploymentFormSpecialty;
