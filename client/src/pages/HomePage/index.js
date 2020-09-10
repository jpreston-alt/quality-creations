import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import HomeJumbotron from "../../components/HomeJumbotron";
import HomeHeader from "../../components/HomeHeader";
import HomeBodyContainer from "../../components/HomeBodyContainer";
import HomeBodyPhotosContainer from "../../components/HomeBodyPhotosContainer";
import HomeBodyPhotosHeader from "../../components/HomeBodyPhotosHeader";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HomeJumbotron />
      <div className="uk-container">
        <HomeHeader />
        <HomeBodyContainer />
        <HomeBodyPhotosHeader />
        <HomeBodyPhotosContainer />
      </div>
    </div>
  );
}

export default HomePage;
