function FaqCard(topics, faq) {
  this.topics = topics;
  this.faq = faq;
}

const webDevelopment = new FaqCard("Web Development", [
  {
    question:
      "This is my first time purchasing a website. Will you help walk me through the whole process?",
    answer:
      "Absolutely! We have unique processes in place that will educate and help you make informed decisions along the way. The last thing we want is for you to be uncomfortable or overwhelmed.",
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
  webDevelopment,
  // q2,
  // q3,
  // q4,
  // q5
];

export default faqData;
