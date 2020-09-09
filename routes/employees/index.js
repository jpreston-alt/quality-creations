require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");
const { email } = require("../../utils/nodemailer/employees");

router.post("/", ({ body }, res) => {
  db.Employees.create({
    employeeName: body.employeeName,
    employeeLocationCity: body.employeeLocationCity,
    employeeLocationState: body.employeeLocationState,
    employeeEmail: body.employeeEmail,
    employeePhone: body.employeePhone,
    yearsExperience: body.yearsExperience,
    employeeSpecialty: body.employeeSpecialty,
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
