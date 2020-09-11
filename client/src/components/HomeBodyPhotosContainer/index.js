import React from "react";
import "./styles.css";
import HomeBodyPhotosCard from "../HomeBodyPhotosCard";

function HomeBodyPhotosContainer() {
  let images = [
    {
      src:
        "https://raw.githubusercontent.com/Adambear1/MaryellePhotography/master/assets/iphoneimage.png",
      name: "Maryelle Photography",
      link: "https://adam-maryelle-photography.herokuapp.com/",
    },

    {
      src:
        "https://raw.githubusercontent.com/Adambear1/Kristen-Lashes/master/assets/images/iphonescreenshot.png",
      name: "Kristen Lashes",
      link: "https://quality-creations-kristen-lash.herokuapp.com/",
    },
    {
      src:
        "https://raw.githubusercontent.com/Adambear1/Seven-Sons-Kitchen-React/master/assets/images/iphonescreenshot.png",
      name: "Seven Sons Kitchen",
      link: "https://quality-creations-sevensons.herokuapp.com/",
    },
    {
      src:
        "https://raw.githubusercontent.com/Adambear1/HookerCleaningCo/master/assets/images/iphonescreenshot.png",
      name: "Hooker Cleaning Company",
      link: "https://adam-hooker-cleaning-company.herokuapp.com/",
    },
    {
      src:
        "https://raw.githubusercontent.com/Adambear1/MollysHops/master/assets/images/iphonescreenshot.png",
      name: "Mollys Hops",
      link: "https://adam-mollys-hops.herokuapp.com/",
    },
  ];
  return (
    <>
      <div
        class="uk-position-relative uk-visible-toggle uk-light carousel-project-main"
        tabname="-1"
        uk-slider="true"
      >
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-grid">
          {images.map((item) => {
            return (
              <HomeBodyPhotosCard
                image={item.src}
                name={item.name}
                link={item.link}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default HomeBodyPhotosContainer;
