function ServicesCard(title, icon, description) {
    this.title = title;
    this.icon = icon;
    this.description = description;
};

const webCard = new ServicesCard(
    "Website",
    "desktop",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

const softwareCard = new ServicesCard(
    "Software",
    "cog",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

const databaseCard = new ServicesCard(
    "Database",
    "database",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

const apiCard = new ServicesCard(
    "API's",
    "code",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

const hostingCard = new ServicesCard(
    "Hosting & Maintenance",
    "server",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

const mobileCard = new ServicesCard(
    "Mobile App Development",
    "phone",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit vehicula tincidunt at ac quam.Donec hendrerit rhoncus dolor et luctus.Ut dignissim, enim congue tincidunt efficitur, lectus eros molestie enim, quis aliquam orci erat id magna.Integer nunc arcu, ultricies in mauris ac, fringilla varius ipsum.Etiam blandit nulla tellus, at euismod quam blandit et.Cras tristique dapibus vehicula.Morbi turpis purus, facilisis id pretium ac, accumsan hendrerit velit.Sed dui dolor, sodales eu orci fermentum, vulputate porttitor nisi.Ut at pharetra magna.Aenean mattis ut sem sed ultricies.Nam nibh ligula, maximus sed accumsan eu, elementum ac tellus"
);

let servicesData = [webCard, softwareCard, databaseCard, apiCard, hostingCard, mobileCard];

export default servicesData;