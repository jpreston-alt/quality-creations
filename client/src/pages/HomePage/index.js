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
      </div>
    </div>
  );
}

export default HomePage;
