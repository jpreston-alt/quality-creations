import React from "react";

function HomeEmploymentFormMisc(props) {
  return (
    <div class="uk-margin">
      <textarea
        name="employeeMisc"
        class="uk-textarea employment-form-input"
        rows="5"
        placeholder="What is your value add to the company?..."
        onChange={props.addData}
      ></textarea>
    </div>
  );
}

export default HomeEmploymentFormMisc;
