import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/about.jpg";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import ContentContainer from "../../components/ContentContainer";
import MeetTheTeamCard from "../../components/MeetTheTeamCard";

function AboutPage() {
  return (
    <div class="page-container">
      <Navbar />
      <Cover
        image={image}
        heading="Who We Are"
        subtitle="Some headline here, Lorem ipsum dolor sit ame lorem"
        color="#065550d2"
        left="5%"
      />
      <ContentContainer>
        <div
          class="uk-grid-match uk-child-width-expand@s uk-text-center"
          uk-grid="true"
        >
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-card-hover">
              <h3 className="card-header">About</h3>
              <hr className="pink-hr" />
              <p className="card-p uk-text-justify">
                Quality Creations was founded by a group of young, innovative,
                and like-minded developers with a vision to revolutionize the
                current state of the freelancing and development industry. By
                creating such an entity that adheres to all developers learning
                methods and daily practices, all employees of the firm are
                brought on and retained as continually being energetic and
                motivated to conquer all projects that come this way. With
                weekly trainings, in house seminars, a network of culturally and
                skillfully diverse individuals, no project is seen as too big or
                too little. Through such a network of innovative, skillful, and
                dedicated developers, all projects are deemed to be streamlined
                while still holding the highest of standards by executing even
                the smallest of details. With all code done in-house with no in
                such a group fashion, with no outsourcing or corners being cut,
                it is not uncommon for most all projects to be finalized within
                just a few weeks. We take the utmost pride is being different by
                leading the way of this new approach, of cutting costs,
                finishing projects in a more timely fashion, and most
                importantly, fostering each employee to grow, make a direct
                impact, and have fun while mastering their craft.
              </p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body mission-card uk-card-hover">
              <p className="card-p uk-text-italic mission-statement">
                "Precision in code is to exceed in the future."
              </p>
            </div>
            <div class="uk-card uk-card-default uk-card-body uk-margin-top uk-card-hover">
              <h3 className="card-header">Values</h3>
              <hr className="pink-hr" />
              <ul className="values-ul">
                <li className="values-li">
                  Always exceed expectations; both in finalized product and
                  through the process.
                </li>
                <li className="values-li">
                  Learn something new every day and be boundless to work
                  together to reach new heights.
                </li>
                <li className="values-li">
                  Clean, precise code to minimize time, cost, and confusion, to
                  then maximize the customer's experience and overall
                  functionality of the final product.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MeetTheTeamCard />
      </ContentContainer>
      <Footer />
    </div>
  );
}

export default AboutPage;
