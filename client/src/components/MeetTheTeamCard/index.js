import React from "react";
import "./style.css";
import EmployeeCard from "../EmployeeCard";
import adamPic from "../../assets/images/employees/adam.jpeg";
import nickPic from "../../assets/images/employees/nick.jpeg";
import joannaPic from "../../assets/images/employees/joanna.jpeg";

function MeetTheTeamCard() {
    return (
        <div>
            <div class="uk-card uk-card-default uk-card-body uk-margin-top uk-card-hover">
                <h3 className="card-header uk-text-center">Meet the Team</h3>
                <hr className="pink-hr" />
                <div class="uk-grid-divider uk-child-width-expand@m employee-container" uk-grid="true">
                    <div>
                        <EmployeeCard
                            image={adamPic}
                            name="Adam Birgenheier"
                            linkedin="https://www.linkedin.com/in/abirgenheier/"
                            github="https://github.com/Adambear1"
                        />
                    </div>
                    <div>
                        <EmployeeCard
                            image={nickPic}
                            name="Nicholas Goudeau"
                            linkedin="https://www.linkedin.com/in/nicholasgoudeau/"
                            github="https://github.com/ngoudeau2012"
                        />
                    </div>
                    <div>
                        <EmployeeCard
                            image={joannaPic}
                            name="Joanna Preston"
                            linkedin="https://www.linkedin.com/in/joanna-preston/"
                            github="https://github.com/jpreston-alt"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MeetTheTeamCard;
