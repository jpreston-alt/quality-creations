import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Cover from "../../components/Cover";
import image from "../../assets/images/about.jpg";
import Footer from "../../components/Footer";
import ContentContainer from "../../components/ContentContainer";

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
                <div class="uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover">
                            <h3 className="card-header">Why Quality Creations</h3>
                            <hr className="pink-hr" />
                            <p className="card-p uk-text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus dolor et luctus. Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna. Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum. Etiam blandit nulla tellus, at euismod quam blandit et. Cras tristique dapibus vehicula. Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit. Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi. Ut at pharetra magna. Aenean mattis ut sem sed ultricies. Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus dolor et luctus. Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna. Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum. Etiam blandit nulla tellus, at euismod quam blandit et. Cras tristique dapibus vehicula. Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit. Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi. Ut at pharetra magna. Aenean mattis ut sem sed ultricies. Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-card-hover">
                            <h3 className="card-header">Benefits</h3>
                            <hr className="pink-hr" />
                            <ul className="career-ul">
                                <li className="career-li">Some benefit goes here lorem ipsum dolor sit amet</li>
                                <li className="career-li">Some benefit goes here lorem ipsum dolor sit amet</li>
                                <li className="career-li">Some benefit goes here lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div class="uk-card uk-card-default uk-card-body uk-margin-top uk-card-hover">
                            <h3 className="card-header">Open Positions</h3>
                            <hr className="pink-hr" />
                            <ul className="career-ul">
                                <li className="career-li">Some job listing goes here lorem ipsum</li>
                                <li className="career-li">Some job listing goes here lorem ipsum</li>
                                <li className="career-li">Some job listing goes here lorem ipsum </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body uk-margin-top uk-text-center uk-card-hover">
                        <h3 className="card-header uk-text-center">Interested in Working with us?</h3>
                        <hr className="pink-hr" />
                        <p className="card-p">
                            Send your resume and cover letter to <a className="email-link" href="mailto:something@quality-creations.com">something@quality-creations.com.</a> Be sure to include WHY you want to work for Quality Creations!
                        </p>
                        <a className="uk-button uk-button-default apply-btn" href="mailto:something@quality-creations.com">Apply</a>
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default CareersPage;