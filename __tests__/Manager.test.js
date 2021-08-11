const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("constructor", () => {
    // TODO: Write a test for the Manager constructor that should take in name, id, email and officeNumber
    it("should take a name string, an id number, an email string and an officeNumber number as arguments and assert name", () => {
      // arrange
      const managerName = "Claudia";
      const managerId = 1;
      const managerEmail = "claudiacorreasalhab@gmail.com";
      const managerOfficeNumber = 123;

      // act
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );

      // assert
      expect(manager.name).toEqual("Claudia");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Manager constructor that should take in name, id, email and officeNumber
    it("should take a name string, an id number, an email string and an officeNumber number as arguments and assert id", () => {
      // arrange
      const managerName = "Claudia";
      const managerId = 1;
      const managerEmail = "claudiacorreasalhab@gmail.com";
      const managerOfficeNumber = 123;

      // act
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );

      // assert
      expect(manager.id).toEqual(1);
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Manager constructor that should take in name, id, email and officeNumber
    it("should take a name string, an id number, an email string and an officeNumber number as arguments and assert email", () => {
      // arrange
      const managerName = "Claudia";
      const managerId = 1;
      const managerEmail = "claudiacorreasalhab@gmail.com";
      const managerOfficeNumber = 123;

      // act
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );

      // assert
      expect(manager.email).toEqual("claudiacorreasalhab@gmail.com");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Manager constructor that should take in name, id, email and officeNumber
    it("should take a name string, an id number, an email string and an officeNumber number as arguments and assert officeNumber", () => {
      // arrange
      const managerName = "Claudia";
      const managerId = 1;
      const managerEmail = "claudiacorreasalhab@gmail.com";
      const managerOfficeNumber = 123;

      // act
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );

      // assert
      expect(manager.officeNumber).toEqual(123);
    });
  });

  describe("getRole", () => {
    // TODO: Write a test for the Manager getRole() method that should return a string value of "Manager"
    it("should return a string value of Manager", () => {
      // arrange
      const managerName = "Claudia";
      const managerId = 1;
      const managerEmail = "claudiacorreasalhab@gmail.com";
      const managerOfficeNumber = 123;
      const managerRoleAkaTeamMember = "Manager";

      // act
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );

      // assert
      expect(manager.getRole()).toEqual(managerRoleAkaTeamMember);
    });
  });
});
