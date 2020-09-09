import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import image from "../../assets/images/about.jpg";
import Footer from "../../components/Footer";

function AboutPage() {
    return (
        <div>
            <div className="page-container">
                <Navbar />
                {/* <h1>AboutPage</h1> */}
                <div className="pic-container">
                    <div className="overlay"></div>
                    <img src={image} alt="computer" />
                    <div className="page-heading-container">
                        <h1 className="page-heading">Who We Are</h1>
                        <h5 className="page-subtitle">Some headline here, Lorem ipsum dolor sit ame lorem ”</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default AboutPage;