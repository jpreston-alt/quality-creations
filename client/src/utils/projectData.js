import image1 from "../assets/images/projectImages/one.jpg";
import image2 from "../assets/images/projectImages/two.jpg";
import image3 from "../assets/images/projectImages/three.jpg";

function ProjectCard(name, description, image, link) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
};

const project1 = new ProjectCard(
    "Project Name",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac projectuam. Donec hendrerit rhoncus.",
    image1,
    ""
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