import React from "react";
import "./styles.css";
import HomeEmploymentFormEmail from "../HomeEmploymentFormEmail";
import HomeEmploymentFormMisc from "../HomeEmploymentFormMisc";
import HomeEmploymentFormName from "../HomeEmploymentFormName";
import HomeEmploymentFormPhoneNumber from "../HomeEmploymentFormPhoneNumber";
import HomeEmploymentFormSpecialty from "../HomeEmploymentFormSpecialty";

function HomeEmploymentFormIndex() {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", padding: "20px" }}>
      <div className="uk-text-center">
        <legend className="uk-legend employment-form-legend">Interest Form</legend>
      </div>
      <HomeEmploymentFormName />
      <HomeEmploymentFormPhoneNumber />
      <HomeEmploymentFormEmail />
      <HomeEmploymentFormSpecialty />
      <HomeEmploymentFormMisc />
      <div className="uk-text-center">
        <button className="uk-button uk-button-primary employment-form-btn" type="submit">
          Submit
      </button>
      </div>
    </div>
  );
}

export default HomeEmploymentFormIndex;
