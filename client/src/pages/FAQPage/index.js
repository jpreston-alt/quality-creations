import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/about.jpg";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import ContentContainer from "../../components/ContentContainer";

function FAQPage() {
    return (
        <div>
            <Navbar />
            <Cover
                image={image}
                heading="FAQ's"
                subtitle="Some headline here, Lorem ipsum dolor sit ame lorem"
                color="#065550d2"
                left="5%"
            />
            <ContentContainer>

            </ContentContainer>
            <Footer />
        </div>
    )
};

export default FAQPage;