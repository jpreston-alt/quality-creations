import React from "react";
import HomeBodyCard from "../HomeBodyCard";

function HomeBodyContainer() {
  let components = [
    {
      name: "About",
      highlights: [
        "About Quality Creations",
        "Meet The Team",
        "Mission Statement",
        "Vision",
      ],
    },
    {
      name: "Careers",
      highlights: [
        "Why Quality Creations",
        "Support",
        "Trainings",
        "Technology",
        "Growth",
        "Culture",
        "Apply",
      ],
    },
    {
      name: "Services",
      highlights: [
        "Websites",
        "Mobile Applications",
        "Softwares",
        "Databases",
        "APIs",
        "Hosting and Maintenance",
      ],
    },
    {
      name: "Our Work",
      highlights: ["Portfolio", "Companies", "Testimonies"],
    },
    {
      name: "Contact",
      highlights: ["Location", "Phone", "Email", "LinkedIn", "FAQ"],
    },
    {
      name: "Get Started",
      highlights: ["Get a Quote", "Submit Request Form"],
    },
  ];
  return (
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid="true">
      {components.map((item) => {
        return (
          <div>
            <HomeBodyCard name={item.name} highlights={item.highlights} />
          </div>
        );
      })}
    </div>
  );
}

export default HomeBodyContainer;
