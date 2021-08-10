const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school;
  }
}

Intern.prototype.getSchool = function () {
  return this.school;
};
Intern.prototype.getRole = function () {
  return "Intern";
};
