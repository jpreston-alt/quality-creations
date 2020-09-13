import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/mouse.jpg";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import ContentContainer from "../../components/ContentContainer";
import ServicesCard from "../../components/ServicesCard";
import servicesData from "../../utils/servicesData";

function ServicesPage() {
    return (
        <div class="page-container">
            <Navbar />
            <Cover
                image={image}
                heading="What We Do"
                subtitle="Some headline here, Lorem ipsum dolor sit ame lorem"
                color="#065550d2"
                right="5%"
                justify="uk-text-right"
            />
            <ContentContainer>
                <div class="uk-grid-match uk-child-width-1-2@m uk-text-center" uk-grid="true">
                    {
                        servicesData.map((el, index) => {
                            return <ServicesCard
                                title={el.title}
                                icon={el.icon}
                                description={el.description}
                                key={index}
                            />
                        })
                    }
                </div>
            </ContentContainer>
            <Footer />
        </div>
    )
};
export default ServicesPage;