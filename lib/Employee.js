class Employee {
  constructor(name, id, email) {
    this.name;
    this.id;
    this.email;
  }
}

Employee.prototype.getName = function () {
  return this.name;
};
Employee.prototype.getId = function () {
  return this.id;
};
Employee.prototype.getEmail = function () {
  return this.email;
};
Employee.prototype.getRole = function () {
  return "Employee";
};

module.exports = Employee;
