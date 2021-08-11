const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getRole", () => {
    // TODO: Write a test for the Employee getRole() method that should return a string value of "Employee"
    it("should return a string value of Employee", () => {
      // arrange
      const employeeName = "Joe";
      const employeeId = 2;
      const employeeEmail = "joe@hisemail.com";
      const employeeRoleAkaTeamMember = "Employee";

      // act
      const employee = new Employee(employeeName, employeeId, employeeEmail);

      // assert
      expect(employee.getRole()).toEqual(employeeRoleAkaTeamMember);
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Employee constructor that should take in name, id, email
    it("should take a name string, an id number and an email string as arguments", () => {
      // arrange
      const employeeName = "Joe";
      const employeeId = 2;
      const employeeEmail = "joe@hisemail.com";

      // act
      const employee = new Employee(employeeName, employeeId, employeeEmail);

      // assert
      expect(employee.name).toEqual("Joe");
      expect(employee.id).toEqual(2);
      expect(employee.email).toEqual("joe@hisemail.com");
    });
  });
});
