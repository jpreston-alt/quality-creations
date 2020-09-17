require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");
const { email } = require("../../utils/nodemailer/employees");

router.post("/", ({ body }, res) => {
  db.Employees.create({
    employeeName: body.employeeName,
    employeeGithub: body.employeeGithub,
    employeePhoneNumber: body.employeePhone,
    employeeSpecialty: body.employeeSpecialty,
    employeeMisc: body.employeeMisc,
  })
    .then((data) => {
      // try {
      res.json(data);
      email(data);
      // } catch (error) {
      //   res.status(400).json({ error });
      // }
    })
    .catch((err) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
