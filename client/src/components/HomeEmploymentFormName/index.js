import React from "react";

function HomeEmploymentFormName(props) {
  return (
    <div class="uk-margin">
      <div class="uk-inline uk-width-expands">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input
          name="employeeName"
          class="uk-input employment-form-input"
          type="text"
          placeholder="Name..."
          onChange={props.addData}
        />
      </div>
    </div>
  );
}

export default HomeEmploymentFormName;
