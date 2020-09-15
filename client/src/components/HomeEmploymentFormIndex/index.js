import React from "react";
import "./styles.css";
import HomeEmploymentFormEmail from "../HomeEmploymentFormEmail";
import HomeEmploymentFormMisc from "../HomeEmploymentFormMisc";
import HomeEmploymentFormName from "../HomeEmploymentFormName";
import HomeEmploymentFormPhoneNumber from "../HomeEmploymentFormPhoneNumber";
import HomeEmploymentFormSpecialty from "../HomeEmploymentFormSpecialty";

function HomeEmploymentFormIndex() {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <legend className="uk-legend ">Legend</legend>
      <HomeEmploymentFormName />
      <HomeEmploymentFormPhoneNumber />
      <HomeEmploymentFormEmail />
      <HomeEmploymentFormSpecialty />
      <HomeEmploymentFormMisc />
      <button className="uk-button uk-button-primary" type="submit">
        Submit
      </button>
    </div>
  );
}

export default HomeEmploymentFormIndex;
