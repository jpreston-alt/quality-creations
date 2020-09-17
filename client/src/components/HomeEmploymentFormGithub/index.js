import React from "react";

function HomeEmploymentFormGithub(props) {
  return (
    <div class="uk-margin">
      <div class="uk-inline uk-width-expands">
        <span class="uk-form-icon" uk-icon="icon: github-alt"></span>
        <input
          class="uk-input employment-form-input"
          type="text"
          placeholder="Github..."
          onChange={props.addData}
        />
      </div>
    </div>
  );
}

export default HomeEmploymentFormGithub;
