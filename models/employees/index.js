const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
  employeeName: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  employeeLocationCity: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  employeeLocationState: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  employeeEmail: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please Fill Valid Email Address`,
    ],
    trim: true,
    required: [true, "Email Required"],
  },
  employeePhone: {
    type: String,
    validate: {
      validator: function (v) {
        var re = /^\d{10}$/;
        return v == null || v.trim().length < 1 || re.test(v);
      },
      message: "Provided phone number is invalid.",
    },

    yearsExperience: {
      type: Number,
      trim: true,
      required: [true, "Title Required"],
    },
    employeeSpecialty: {
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
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
