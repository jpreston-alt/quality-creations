import React from "react";
import HomeEmploymentFormEmail from "../HomeEmploymentFormEmail";
import HomeEmploymentFormName from "../HomeEmploymentFormName";
import HomeEmploymentFormPhoneNumber from "../HomeEmploymentFormPhoneNumber";
import HomeEmploymentFormSpecialty from "../HomeEmploymentFormSpecialty";

function HomeEmploymentFormIndex() {
  return (
    <>
      <legend class="uk-legend">Legend</legend>

      <HomeEmploymentFormName />

      <HomeEmploymentFormPhoneNumber />
      <HomeEmploymentFormEmail />
      <HomeEmploymentFormSpecialty />
      <div class="uk-margin">
        <textarea
          class="uk-textarea"
          rows="5"
          placeholder="Textarea"
        ></textarea>
      </div>

      <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        <label>
          <input class="uk-radio" type="radio" name="radio2" checked /> A
        </label>
        <label>
          <input class="uk-radio" type="radio" name="radio2" /> B
        </label>
      </div>

      <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        <label>
          <input class="uk-checkbox" type="checkbox" checked /> A
        </label>
        <label>
          <input class="uk-checkbox" type="checkbox" /> B
        </label>
      </div>

      <div class="uk-margin">
        <input
          class="uk-range"
          type="range"
          value="2"
          min="0"
          max="10"
          step="0.1"
        />
      </div>
    </>
  );
}

export default HomeEmploymentFormIndex;
