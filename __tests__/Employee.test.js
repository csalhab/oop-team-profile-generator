const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    // TODO: Write a test for the Employee constructor that should take in name, id, email
    it("should take a name string, an id number and an email string as arguments and assert name", () => {
      // arrange
      const employeeName = "Joe";
      const employeeId = 2;
      const employeeEmail = "joe@hisemail.com";

      // act
      const employee = new Employee(employeeName, employeeId, employeeEmail);

      // assert
      expect(employee.name).toEqual("Joe");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Employee constructor that should take in name, id, email
    it("should take a name string, an id number and an email string as arguments and assert id", () => {
      // arrange
      const employeeName = "Joe";
      const employeeId = 2;
      const employeeEmail = "joe@hisemail.com";

      // act
      const employee = new Employee(employeeName, employeeId, employeeEmail);

      // assert
      expect(employee.id).toEqual(2);
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Employee constructor that should take in name, id, email
    it("should take a name string, an id number and an email string as arguments and assert email", () => {
      // arrange
      const employeeName = "Joe";
      const employeeId = 2;
      const employeeEmail = "joe@hisemail.com";

      // act
      const employee = new Employee(employeeName, employeeId, employeeEmail);

      // assert
      expect(employee.email).toEqual("joe@hisemail.com");
    });
  });

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
});
