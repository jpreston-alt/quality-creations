import React, { useState } from "react";
import "./styles.css";
import API from "../../utils/API";
import HomeEmploymentFormGithub from "../HomeEmploymentFormGithub";
import HomeEmploymentFormMisc from "../HomeEmploymentFormMisc";
import HomeEmploymentFormName from "../HomeEmploymentFormName";
import HomeEmploymentFormPhoneNumber from "../HomeEmploymentFormPhoneNumber";
import HomeEmploymentFormSpecialty from "../HomeEmploymentFormSpecialty";

function HomeEmploymentFormIndex() {
  const [data, setData] = useState();
  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    API.employee(data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(data);
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", padding: "20px" }}>
      <div className="uk-text-center">
        <legend className="uk-legend employment-form-legend">
          Interest Form
        </legend>
      </div>
      <form onSubmit={onSubmit}>
        <HomeEmploymentFormName addData={onChange} />
        <HomeEmploymentFormPhoneNumber addData={onChange} />
        <HomeEmploymentFormGithub addData={onChange} />
        <HomeEmploymentFormSpecialty addData={onChange} />
        <HomeEmploymentFormMisc addData={onChange} />
        <div className="uk-text-center">
          <button
            className="uk-button uk-button-primary employment-form-btn"
            type="submit"
            onSubmit={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeEmploymentFormIndex;
