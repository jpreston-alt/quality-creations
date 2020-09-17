import image1 from "../assets/images/projectImages/one.jpg";
import image2 from "../assets/images/projectImages/two.jpg";
import image3 from "../assets/images/projectImages/three.jpg";

function ProjectCard(name, description, image, link, testimony, date) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.link = link;
  this.testimony = testimony;
  this.date = date;
}

const project1 = new ProjectCard(
  "Maryelle Photography",
  "Promotional landing page for professional with an attached database for automatic email updates for client inquiries. Integrated with supplemental libraries, such as sliders, spinners, and a calendar powered by Google.",
  image1,
  "https://adam-maryelle-photography.herokuapp.com/",
  "Working with the Team at Quality Creations was an overall amazing experience! Being able to complete the project within a timely manner while exceeding expectations was more than I could have ever expected. They held my hand the entire way, gave great marketing and user experience tips for maximizing the idea. I will definitely use their services again for future projects!!",
  "08/2020"
);

const project2 = new ProjectCard(
  "Hooker Cleaning Company",
  "Multifaceted landing page for a local Janitorial Company, with intentions to market for new clients and to display all services and locations that are provided for. Powered through React and Mongo, allows owner of the website to generate monthly reports of new inquires along with automated email updates for all new client inquires in real time.",
  image2,
  "https://adam-hooker-cleaning-company.herokuapp.com/",
  "The absolute best website I could have ever asked for. Had intentions of something simple and to the point, but was able to maximize such expectations and expand to it without over complicating things. I originally tried to make one through wix, but through all the headaches I caved in and have absolutely no regrets at all. Bravo!  ",
  "08/2020"
);

const project3 = new ProjectCard(
  "Seven Sons Kitchen",
  "Landing page set up for many future innovations and add ons, such as online order forms, subscriptions, and e-store for merchandise and other collectibles. Covers bare minimum to fit for the clients budget and will add as the business grows.",
  image3,
  "https://quality-creations-sevensons.herokuapp.com/",
  "Everyone needs to use Quality Creations. Absolutely stunning services and could not ask for any more! I came in with a budget and an idea, and left with much more than expected. Truly the best in business.",
  "08/2020"
);

const project4 = new ProjectCard(
  "Saxton Consulting",
  "Simple landing page concept for real estate broker and mergers and acquisitions manager. Style and flow of the page had the intent for luxury and calm. All UI/UX effects were in house, supplemented with UI Kit functionality.",
  image1,
  "https://quality-creations-saxton.herokuapp.com/",
  "Beautiful! Stunning! Gorgeous! Absolutely the best service and quality imaginable. Must use!!",
  "09/2020"
);

const project5 = new ProjectCard(
  "Ronald Landscaping",
  "Clean, sleek, utilitarian designed landing page made with the intent to simplify and generate positive image of a new, local landscaping company.",
  image2,
  "https://ronaldlandscaping-qc-ng.herokuapp.com/",
  "Exactly what I wanted. Been wanting a great landing page for some time now and super happy I went with this referral. Definitely coming back in the future!",
  "08/2020"
);

const project6 = new ProjectCard(
  "Kristen Lashes",
  "Initialized a landing page intended for client browsing and self-marketing. Intended to pave the path for future e-commerce technologies and online payment system.",
  image3,
  "https://quality-creations-kristen-lash.herokuapp.com/"
);

let projectData = [project1, project2, project3, project4, project5, project6];

export default projectData;
