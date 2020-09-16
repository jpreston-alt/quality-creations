import image1 from "../assets/images/projectImages/one.jpg";
import image2 from "../assets/images/projectImages/two.jpg";
import image3 from "../assets/images/projectImages/three.jpg";

function ProjectCard(name, description, image, link, initial) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.link = link;
  this.initial = initial;
}

const project1 = new ProjectCard(
  "Maryelle Photography",
  "Promotional landing page for professional with an attached database for automatic email updates for client inquiries. Integrated with supplemental libraries, such as sliders, spinners, and a calendar powered by Google.",
  image1,
  "",
  "MP"
);

const project2 = new ProjectCard(
  "Project Name",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac projectuam. Donec hendrerit rhoncus.",
  image2,
  ""
);

const project3 = new ProjectCard(
  "Project Name",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac projectuam. Donec hendrerit rhoncus.",
  image3,
  ""
);

const project4 = new ProjectCard(
  "Project Name",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac projectuam. Donec hendrerit rhoncus.",
  image1,
  ""
);

const project5 = new ProjectCard(
  "Project Name",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac projectuam. Donec hendrerit rhoncus.",
  image2,
  ""
);

const project6 = new ProjectCard(
  "Project Name",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac projectuam. Donec hendrerit rhoncus.",
  image3,
  ""
);

let projectData = [project1, project2, project3, project4, project5, project6];

export default projectData;
