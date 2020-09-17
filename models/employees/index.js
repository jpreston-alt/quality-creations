const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
  employeeName: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  employeePhoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        var re = /^\d{10}$/;
        return v == null || v.trim().length < 1 || re.test(v);
      },
      message: "Provided phone number is invalid.",
    },
  },
  employeeGithub: {
    type: String,
    trim: true,
    required: [true, "Title Required"],
  },
  employeeSpecialty: {
    type: String,
    enum: [
      "designer",
      "full-stack-developer",
      "mobile-developer",
      "back-end-developer",
    ],
    required: [true, "Category Required"],
  },
  employeeMisc: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
