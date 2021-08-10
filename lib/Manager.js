const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber;
  }
}

Manager.prototype.getRole = function () {
  return "Manager";
};
