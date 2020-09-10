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

            </ContentContainer>
            <Footer />
        </div>
    )
};

export default CareersPage;