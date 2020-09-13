function FaqCard(topics, faq) {
  this.topics = topics;
  this.faq = faq;
}

const services = new FaqCard("Services", [
  {
    question: "What is Quality Creations?",
    answer:
      "Quality Creations is a revolutionary freelance development firm that specializes in web development, mobile applications, software, and everything in between. We strive in executing the details of all projects by having a network of highly skilled developers that work together to assure top-quality code and performance.",
  },
  {
    question: "Why Quality Creations?",
    answer:
      "In an age of technology, the company that utilizes their resources the best is the one that will succeed. At Quality Creations, we put quality first and assure that all projects, no matter the size, are done to perfection. The company assures the employees are not overworked, do not have multiple projects to complete at once, and are in the best mindset at all times to execute all projects flawlessly. Through having such positive ratings within our community, we can assure that our pricing and production can compete with anyone elses.",
  },
  {
    question: "Why not just make a website off Wix, Weeble, or WordPress?",
    answer:
      "Everything in life has its purpose. There are most definitely times such websites are preferred over custom, dynamic websites, and other times that are not. For simple landing pages, for personal resumes, one-time events (weddings, graduations, etc.), and other circumstantial occasions, using such websites might be best. However, for small businesses, organizations, and many other companies and individuals that fall prey to such websites, they might not be utilizing their resources in the best way. The fundamental difference between a WordPress site and a custom website is the dynamic ability a custom website can have. For instance, WordPress is static, confusing, and cannot process, withhold, or disburse valuable client information; hence, why it is more suitable for one-time-events and small occasions. With a custom website, the opportunities are endless. We have the ability to integrate top-technology into all platforms, such as Facebook, Instagram, and Google authentication, metrics, and resources to further enhance websites. Thats not to mention that we have the ability to attach a database and algorithms to the code for the ability to create notifications, reports, and custom analytics, beneficial for future marketing of the company. ",
  },
  {
    question:
      "I am a small business with a limited budget, is possible to purchase a limited website and still have maximum impact?",
    answer:
      "Yes! At Quality Creations we focus solely on User Experience (UX) and strive to produce the best website imaginable. No matter if it is a simple landing page, a full-stack creation, or software created for the toughest task, all are created with the same passion and quality, suited for the clients needs.",
  },
  {
    question:
      "This is my first time purchasing a website. Will you help walk me through the whole process?",
    answer:
      "Absolutely! We have unique processes in place that will educate and help you make informed decisions along the way. The last thing we want is for you to be uncomfortable or overwhelmed.",
  },
  {
    question: "Do you outsource your projects or send work overseas?",
    answer:
      "No, all projects are done in house by the staff. Doing so allows for streamlined communication and information from us to the client.",
  },
  {
    question: "Do we own the completed website?",
    answer:
      "Yes! Once the website is complete, the client owns the rights to the website immediately and are given the original code for safekeeping. We even offer extended help to publish, host, and maintain, if needed by the client, while they still retain all rights of ownership through that duration.",
  },
  {
    question: "How long does it take to finish a website?",
    answer:
      "Depending on the size of the project, a simple landing page for a small business can take 2-3 days; where as a full stack integrated platform can take 2-3 weeks. Yes. We are able to produce top quality products in such a short amount of time.",
  },
  {
    question:
      "Do I need to have all my content prepared prior to contacting you?",
    answer:
      "Not at all! All staff members are highly talented individuals that have a knack for creative and impactful design and functionality. In fact, many of our past clients came to us without a plan and were consulted and satisfied right away with our employees vision.",
  },
  {
    question:
      "I’m not local to your area. Can you still make my business' website?",

    answer:
      "Yes! We have the ability to work for clients all throughout the world!",
  },
  {
    question:
      "I have an idea for a website but it's not exactly a small business. Should I still contact you about my project?",

    answer:
      "Of course! No project is too big or too small for our group of talented developers. In fact, we strive under pressure with massive projects that have a lot of intricate. moving parts!",
  },
  {
    question:
      "I don't see any work examples from my industry. Do you work with all types of businesses?",

    answer:
      "Most definitely! Ranging from hops (brewing) to sports associations, we have seen it will. We are open to all business models and strive in generating the best layout, no matter the industry.",
  },
]);
const webDevelopment = new FaqCard("Web Development", [
  {
    question: "What technologies are used for developing websites?",
    answer:
      "All websites are made with React, and have the ability to use dozens of supplementary libraries to further adhere to the project's functionality.",
  },
  {
    question: "What is full-stack web application?",
    answer:
      "It is an application that has a front-end user interface, along with a server and database connection. It is a top-tier web creation that capitalizes both on the users experience and the businesses functionality and work flow.",
  },
  {
    question: "Does the company just focus on full-stack projects?",
    answer:
      "No! The employees of the firm are versatile and are able to execute on multi-page full-stack project, or simple landing pages.",
  },
]);
const mobileApplication = new FaqCard("Mobile Application", [
  {
    question: "What technologies are used for to create mobile applications?",
    answer:
      "Traditionally, complex languages such as Java, Swift, and Objective-C are used to create either an iOS or Android mobile application. However, At Quality-Creations we develop all applications in the new and improved language of React Native, which is a compiled version of all prior languages, adding a level of versatility to the application.",
  },
  {
    question: "Can you create both an iOS and Android Application?",
    answer:
      "Yes! By coding in React Native, all code can be ran on both devices, unlike that of the traditional method of Java, Swift, or Objective-C.",
  },
  {
    question: "What kind of mobile applications can you make?",
    answer:
      "As of right now, the company only specializes in mobile applications to capitalize on business/employee/client relationships. Games and other mobile creations have not been specialized or been trained on internally yet.",
  },
]);
const software = new FaqCard("Software", [
  {
    question: "What technologies are used for to software?",
    answer:
      "Right now all software is made through NodeJS, Python, and Excel/VBA. Depending on the size and purpose of the project, one of the languages will be used to capitalize on the functionality and usage of it.",
  },
  {
    question: "What are examples of software the company the can make?",
    answer:
      "Anything from automated mailing/texting lists, to employee directories, to even data filtering spreadsheets in Excel. By having a team with a diverse professional background, the imagination and skill set are endless to fit almost any of our clients needs.",
  },
]);
const databases = new FaqCard("Databases and APIs", [
  {
    question: "What databases do you use?",
    answer:
      "Both SQL and no-SQL databases. Anything from mySQL, Mongo, CouchDB, to PostgreSQL. Depending on the circumstances for the API routes and data needing to be stored, we have the ability to create and render any databases needed for the circumstance.",
  },
  {
    question: "What is an API?",
    answer:
      "API stands for Application Programming Interface. It is essentially data stored in a database and filtered/disbursed through a server to an end client. The data can range from a clients name and contact information, to compiled statistical analytics from last years revenue. With all libraries today, the possibilities are endless.",
  },
  {
    question: "What is the purpose of having API?",
    answer:
      "For already existing user interfaces, or websites, an integrated API can be hooked to such platform to make it much more dynamic in nature. It can also be used for clients of a business, where the API can send updates to such clients based on inventory, sales, or any other information that is stored by the company.",
  },
]);
const hosting = new FaqCard("Hosting and Maintenance", [
  {
    question: "What is hosting and maintenance?",
    answer:
      "When a website is completed, the owner has the ability to post the website on their own terms and have their own in-house IT team maintain and update it to their pleasure. Or, at Quality-Creations, we offer additional services to host the website, do monthly checkups and maintenance work, security updates, and overall updates to the owners desire.",
  },
  {
    question: "Why can't I just host the website myself?",
    answer:
      "You can if you want! Today, there are many services and features such as GoDaddy and HostGator that allows anyone to host a website. However, to assure it is done the correct way and secured to prevent domain high-jacking, Quality-Creations assures it is hosted accordingly.",
  },
  {
    question: "Why should I buy the monthly maintenance and updating package?",
    answer:
      "There are many answers to this question. But to start off, with security threats such as hackers and domain/platform high-jacking, it is common practice to regularly check and service websites to assure they have not been hacked into. Additionally, with the world of technology changing today, libraries, software, and everything in between are constantly being updated and augmented. With that said, a website today may not be compatible or even functional 6 months from now. With the subscription, Quality-Creations assures that the websites code updates along with all other updates, solidifying that the website never goes out-of-date. Lastly, like technology, businesses never stop growing or changing either. With the subscription, based on the plan, we offer free changes and edits to the website, per month, for any reason. We also provide free consulting and help along the way.",
  },
]);

let faqData = [
  services,
  webDevelopment,
  mobileApplication,
  software,
  databases,
  hosting,
  // q5
];

export default faqData;
