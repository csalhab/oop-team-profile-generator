const Employee = require("./Employee");

class Manager extends Employee {
  constructor() {
    this.officeNumber;
  }
}

Manager.prototype.getRole = function () {
  return "Manager";
};
