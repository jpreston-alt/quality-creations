import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import HomeJumbotron from "../../components/HomeJumbotron";
import HomeHeader from "../../components/HomeHeader";
import HomeBodyContainer from "../../components/HomeBodyContainer";
import HomeBodyPhotosContainer from "../../components/HomeBodyPhotosContainer";
import HomeBodyPhotosHeader from "../../components/HomeBodyPhotosHeader";
import HomeTechnologiesHeader from "../../components/HomeTechnologiesHeader";
import HomeTechnologiesContainer from "../../components/HomeTechnologiesContainer";
import HomeEmploymentHeader from "../../components/HomeEmploymentHeader";
import HomeEmploymentContainer from "../../components/HomeEmploymentContainer";
import HomeEmploymentPhoto from "../../components/HomeEmploymentPhoto";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HomeJumbotron />
      <div className="uk-container">
        {/* Main Cards */}
        <HomeHeader />
        <HomeBodyContainer />
        {/* Photos Cards */}
        <HomeBodyPhotosHeader />
        <HomeBodyPhotosContainer />
        {/* Technologies Cards */}
        <HomeTechnologiesHeader />
        <HomeTechnologiesContainer />
        {/* Employment Cards */}
        <HomeEmploymentHeader />
        <div class="uk-child-width-1-1@s uk-child-width-1-2@m" uk-grid="true">
          <HomeEmploymentContainer />
          <HomeEmploymentPhoto />
        </div>
      </div>
      <Footer className="main-footer" />
    </div>
  );
}

export default HomePage;
