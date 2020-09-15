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
  "Using both SQL and No-SQL databases, the company can offer a variety of services which can integrate components of API's or backend software for internal communication and transferring of information. No matter the size of the project, or the request made, the Team has great experience with over half a dozen database types, along with countless libraries and provisions to adhere to the project at hand. For instance, wether it is Mongoose with custom methods and statics for custom filtered data for MongoDB or sequelize for parsing of data for mySQL, the team is dynamic in nature to tackle all feats."
);

const apiCard = new ServicesCard(
  "API's",
  "code",
  "For additions wanting to be made for an existing database, or for even a new database to be made for API calls, the team is able to create secure routes and use supplemental open-source libraries to assure that all calls made are done so in a secure manner. Great use examples for such API calls are for local Movie Theaters possibly wanting to sell movie statistics to local marketing firms, which can all automatically be done through API calls. Another could be for a local real estate firm wanting to update their brokers of market statistics, which too, can be done through API calls."
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
