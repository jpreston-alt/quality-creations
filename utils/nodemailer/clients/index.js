require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.email = function (data) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL,
    to: "adamcarlbirgenheier@gmail.com.com",
    to: "adamcarlbirgenheier@gmail.com",
    subject: `Client Inquiry `,
    text: `${data}
    `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
