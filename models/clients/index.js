const mongoose = require("mongoose");
const ClientSchema = mongoose.Schema({
  businessName: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  businessIndustry: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  representativeName: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  representativeEmail: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please Fill Valid Email Address`,
    ],
    trim: true,
    required: [true, "Email Required"],
  },
  representativePhone: {
    type: String,
    validate: {
      validator: function (v) {
        var re = /^\d{10}$/;
        return v == null || v.trim().length < 1 || re.test(v);
      },
      message: "Provided phone number is invalid.",
    },
    trim: true,
    required: [true, "Number Required"],
  },
  applicationCategory: {
    type: String,
    enum: [
      "Web Development",
      "Mobile Application",
      "Database",
      "Software",
      "Maintenance",
      "Hosting",
    ],
    required: [true, "Category Required"],
  },
  applicationDetails: {
    type: String,
    required: [true, "Details are required"],
  },
});

const Client = mongoose.model("client", ClientSchema);
module.exports = Client;
