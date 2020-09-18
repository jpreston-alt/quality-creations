import React from "react";
import HomeTechnologiesCard from "../HomeTechnologiesCard";

import web from "./images/webdevelopment.jpg";
import software from "./images/software.jpg";
import database from "./images/database.jpg";
import maintence from "./images/maintence.jpg";
import mobileapp from "./images/mobileapp.jpg";
import apis from "./images/apis.jpg";

function HomeTechnologiesContainer() {
  let technologies = [
    {
      name: "Web Development",
      src: web,
    },
    {
      name: "Mobile Applications",
      src: mobileapp,
    },
    {
      name: "Software Development",
      src: software,
    },
    {
      name: "Databases",
      src: database,
    },
    {
      name: "APIs",
      src: apis,
    },
    {
      name: "Hosting and Maintence",
      src: maintence,
    },
  ];
  return (
    <div
      class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"
      uk-grid="true"
      uk-scrollspy="cls: uk-animation-fade; target: .background-image-technologies; delay: 00; repeat:true"
    >
      {technologies.map((item) => {
        return <HomeTechnologiesCard name={item.name} src={item.src} />;
      })}
    </div>
  );
}

export default HomeTechnologiesContainer;
