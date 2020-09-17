import React from "react";

function HomeEmploymentFormPhoneNumber(props) {
  return (
    <div class="uk-margin">
      <div class="uk-inline uk-width-expands">
        <span class="uk-form-icon" uk-icon="icon: phone"></span>
        <input
          name="employeePhoneNumber"
          class="uk-input employment-form-input"
          type="phone"
          placeholder="Phone Number..."
          onChange={props.addData}
        />
      </div>
    </div>
  );
}

export default HomeEmploymentFormPhoneNumber;
