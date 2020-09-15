import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Cover from "../../components/Cover";
import image from "../../assets/images/careers2.jpg";
import Footer from "../../components/Footer";
import ContentContainer from "../../components/ContentContainer";
import HomeEmploymentFormIndex from "../../components/HomeEmploymentFormIndex";

function CareersPage() {
  return (
    <div>
      <Navbar />
      <Cover
        image={image}
        heading="Work With Us"
        subtitle="Some headline here, Lorem ipsum dolor sit ame lorem Lorem ipsum"
        color="#065550d2"
        right="5%"
        justify="uk-text-right"
      />
      <ContentContainer>
        <div
          class="uk-grid-match uk-child-width-expand@s uk-text-center"
          uk-grid="true"
        >
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-card-hover">
              <h3 className="card-header">Why Quality Creations</h3>
              <hr className="pink-hr" />
              <p className="card-p uk-text-justify">
                Quality Creations was started for the sole purpose to
                revolutionize the freelance and development industry by focusing
                on the actual developers first through hands on training,
                consulting, and team-focused approached to all projects. The
                company utmost lives by the standard that a rising tide lifts
                all boats. We strive to organically rise that tide daily through
                direct trainings, hands-on practice and problem solving, which
                creates a cumulative growth mindset throughout the group. By
                being surrounded by a cast of motivated, skilled, and helping
                individuals, it suddenly becomes fun, uplifting, and encouraging
                to stay in the growth stage, where both the employee and company
                see a direct return. To further reinforce the notion, the team
                is constantly communicating through means of group-text,
                conference calls, and Slack, where ideas, learning experiences,
                and value information are constantly being transmitted between
                all individuals. Just through the direct exposure to such an
                uplifting environment automatically generates greater outcomes
                for all parties involved. We solely believe that if we can
                maintain such a status, then all finalized products will in turn
                continue to be developed at greater rates and at greater
                precision.
              </p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-card-hover">
              <h3 className="card-header">Benefits</h3>
              <hr className="pink-hr" />
              <ul className="career-ul">
                <li className="career-li">
                  Weekly trainings, seminars, and access to all notes, learning
                  experiences, and motivational talks.
                </li>
                <li className="career-li">
                  Access to Slack Channel, Custom Email, and Direct Network with
                  other employees through Zoom, Group Chats, and frequent
                  conference calls.
                </li>
                <li className="career-li">
                  Hands-on learning with senior leaders improving skill,
                  confidence, and production.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body uk-margin-top uk-card-hover" style={{ padding: "30px" }}>
            <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
              <HomeEmploymentFormIndex />
            </div>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}

export default CareersPage;
