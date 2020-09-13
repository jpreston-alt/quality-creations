function ServicesCard(title, icon, description) {
  this.title = title;
  this.icon = icon;
  this.description = description;
}

const webCard = new ServicesCard(
  "Website",
  "desktop",
  "Utilize the reusable components and deliver component-driven architecture using React.js, Handlebars, or even HTML & CSS. No matter the size of the project, Quality-Creations uses the appropriate technology and will always maximize the total effectiveness, client sustainability, and user experience in all projects created."
);

const softwareCard = new ServicesCard(
  "Software",
  "cog",
  "Seamlessly navigate between multiple features of an application by accessing the talented pool of backend developers who can create scalable applications. Quality-Creations offers AWS and Heroku services to host all backend services on the cloud, along with SQL (mySQL, SQLite, PostgreSQL, and CouchDB) and NoSQL (Mongo) databases to store and fetch data reliably using micoservices."
);

const databaseCard = new ServicesCard(
  "Database",
  "database",
  "Using both SQL and No-SQL databases, the company can offer a variety of services which can integrate components of API's or backend software for internal communication and transferring of information. "
);

const apiCard = new ServicesCard(
  "API's",
  "code",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

const hostingCard = new ServicesCard(
  "Hosting & Maintenance",
  "server",
  "Subscription based service that has the staff at Quality-Creations, maintain, service, protect, and update teh final product on a routine basis. Running security checks, updating code, and providing additional consulting allows for top-of-the-line products all the time."
);

const mobileCard = new ServicesCard("Mobile App Development", "phone", "");

let servicesData = [
  webCard,
  softwareCard,
  databaseCard,
  apiCard,
  hostingCard,
  mobileCard,
];

export default servicesData;
