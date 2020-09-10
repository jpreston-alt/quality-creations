import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/about.jpg";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import ContentContainer from "../../components/ContentContainer";

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
                <div class="uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 className="card-header">About</h3>
                            <hr className="pink-hr" />
                            <p className="card-p uk-text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus dolor et luctus. Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna. Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum. Etiam blandit nulla tellus, at euismod quam blandit et. Cras tristique dapibus vehicula. Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit. Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi. Ut at pharetra magna. Aenean mattis ut sem sed ultricies. Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus dolor et luctus. Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna. Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum. Etiam blandit nulla tellus, at euismod quam blandit et. Cras tristique dapibus vehicula. Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit. Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi. Ut at pharetra magna. Aenean mattis ut sem sed ultricies. Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <p className="card-p uk-text-italic mission-statement">
                                "Mission Statement Goes Here"
                            </p>
                        </div>
                        <div class="uk-card uk-card-default uk-card-body uk-margin-top">
                            <h3 className="card-header">Values</h3>
                            <hr className="pink-hr" />
                            <p className="card-p">

                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body uk-margin-top">
                        <h3 className="card-header uk-text-center">Meet the Team</h3>
                        <hr className="pink-hr" />
                        <p className="card-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus dolor et luctus. Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna. Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum. Etiam blandit nulla tellus, at euismod quam blandit et. Cras tristique dapibus vehicula. Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit. Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi. Ut at pharetra magna. Aenean mattis ut sem sed ultricies. Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus.
                        </p>
                    </div>
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default AboutPage;
