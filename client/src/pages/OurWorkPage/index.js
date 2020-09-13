import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/5.jpg";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import ContentContainer from "../../components/ContentContainer";
import ProjectsCard from "../../components/ProjectsCard";
import projectData from "../../utils/projectData";

function OurWorkPage() {
    return (
        <div>
            <Navbar />
            <Cover
                image={image}
                heading="Our Work"
                subtitle="Some headline here, Lorem ipsum dolor sit ame lorem"
                color="#065550d2"
                left="5%"
            // color="rgba(255, 255, 255, 0.6)"
            // textColor="#075550"
            />
            <ContentContainer>
                <div className="uk-child-width-1-2@m" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500;">
                    {
                        projectData.map((el, index) => {
                            return <ProjectsCard
                                name={el.name}
                                image={el.image}
                                key={index}
                                link={el.link}
                                description={el.description}
                            />
                        })
                    }
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};

export default OurWorkPage;