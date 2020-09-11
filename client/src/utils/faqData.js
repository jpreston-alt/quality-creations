function FaqCard(question, answer) {
    this.question = question;
    this.answer = answer;
};

const q1 = new FaqCard(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla vel dui non elit vehicula tincidunt at ac quam?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus."
);

const q2 = new FaqCard(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit."
);

const q3 = new FaqCard(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vel dui non elit. Lorem ipsum dolor sit amet."
);

const q4 = new FaqCard(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla vel dui non elit vehicula tincidunt at ac quam?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui non elit vehicula tincidunt at ac quam. Donec hendrerit rhoncus."
);

const q5 = new FaqCard(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit."
);

let faqData = [q1, q2, q3, q4, q5];

export default faqData;