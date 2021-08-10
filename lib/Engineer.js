const Employee = require("./Employee");

class Engineer extends Employee {
  constructor() {
    this.github;
  }
}

Engineer.prototype.getGithub = function () {
  return this.github;
};
Engineer.prototype.getRole = function () {
  return "Engineer";
};
