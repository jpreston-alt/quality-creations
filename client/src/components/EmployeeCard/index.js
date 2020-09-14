import React from "react";
import "./styles.css";

function EmployeeCard(props) {
  return (
    <div class="uk-text-center">
      <img src={props.image} alt="Employee" className="employee-image" />
      <p className="employee-name">{props.name}</p>
      <a href={props.linkedin} uk-icon="icon: linkedin" className="employee-icon"></a>
      <a href={props.email} uk-icon="icon: mail" className="employee-icon"></a>
      <a href={props.github} uk-icon="icon: github" className="employee-icon"></a>
    </div>
  );
}
export default EmployeeCard;
