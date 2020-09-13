function FaqCard(topics, faq) {
  this.topics = topics;
  this.faq = faq;
}

const qualityCreations = new FaqCard("Quality-Creations", [
  {
    question: "What is Quality Creations?",
    answer:
      "Quality Creations is a revolutionary freelance development firm that specializes in web development, mobile applications, software, and everything in between. We strive in executing the details of all projects by having a network of highly skilled developers that work together to assure top-quality code and performance.",
  },
  {
    question: "Why Quality Creations?",
    answer:
      "In an age of technology, the company that utilizes their resources the best is the one that will succeed. At Quality Creations, we put quality first and assure that all projects, no matter the size, are done to perfection. The company assures the employees are not overworked, do not have multiple projects to complete at once, and are in the best mindset at all times to execute all projects flawlessly. Through having such positive ratings within our community of past clients, we can assure that our pricing and production can compete with anyone else.",
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
    question: "Does the company just focus on full-stack projects?",
    answer:
      "No! The employees of the firm are versatile and are able to execute on multi-page full-stack project, or simple landing page one.",
  },
]);

// const q2 = new FaqCard(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit."
// );

// const q3 = new FaqCard(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit?",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit. Lorem ipsum dolor sit amet."
// );

// const q4 = new FaqCard(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla vel dui non elit vehicula tincidunt at ac quam?",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus."
// );

// const q5 = new FaqCard(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit."
// );

let faqData = [
  qualityCreations,
  webDevelopment,
  // q2,
  // q3,
  // q4,
  // q5
];

export default faqData;
