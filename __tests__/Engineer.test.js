const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Engineer", () => {
  describe("constructor", () => {
    // TODO: Write a test for the Engineer constructor that should take in name, id, email and github
    it("should take a name string, an id number, an email string and a github username string as arguments and assert name", () => {
      // arrange
      const employeeName = "Erika";
      const employeeId = 3;
      const employeeEmail = "erika@heremail.com";
      const employeeGithub = "ibarra";

      // act
      const engineer = new Engineer(
        employeeName,
        employeeId,
        employeeEmail,
        employeeGithub
      );

      // assert
      expect(engineer.name).toEqual("Erika");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Engineer constructor that should take in name, id, email and github
    it("should take a name string, an id number, an email string and a github username string as arguments and assert id", () => {
      // arrange
      const employeeName = "Erika";
      const employeeId = 3;
      const employeeEmail = "erika@heremail.com";
      const employeeGithub = "ibarra";

      // act
      const engineer = new Engineer(
        employeeName,
        employeeId,
        employeeEmail,
        employeeGithub
      );

      // assert
      expect(engineer.id).toEqual(3);
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Engineer constructor that should take in name, id, email and github
    it("should take a name string, an id number, an email string and a github username string as arguments and assert email", () => {
      // arrange
      const employeeName = "Erika";
      const employeeId = 3;
      const employeeEmail = "erika@heremail.com";
      const employeeGithub = "ibarra";

      // act
      const engineer = new Engineer(
        employeeName,
        employeeId,
        employeeEmail,
        employeeGithub
      );

      // assert
      expect(engineer.email).toEqual("erika@heremail.com");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Engineer constructor that should take in name, id, email and github
    it("should take a name string, an id number, an email string and a github username string as arguments and assert github userna,e", () => {
      // arrange
      const employeeName = "Erika";
      const employeeId = 3;
      const employeeEmail = "erika@heremail.com";
      const employeeGithub = "ibarra";

      // act
      const engineer = new Engineer(
        employeeName,
        employeeId,
        employeeEmail,
        employeeGithub
      );

      // assert
      expect(engineer.getGithub()).toEqual("ibarra");
    });
  });

  describe("getRole", () => {
    // TODO: Write a test for the Engineer getRole() method that should return a string value of "Engineer"
    it("should return a string value of Engineer", () => {
      // arrange
      const employeeName = "Erika";
      const employeeId = 3;
      const employeeEmail = "erika@heremail.com";
      const employeeGithub = "ibarra";
      const engineerRoleAkaTeamMember = "Engineer";

      // act
      const engineer = new Engineer(
        employeeName,
        employeeId,
        employeeEmail,
        employeeGithub
      );

      // assert
      expect(engineer.getRole()).toEqual(engineerRoleAkaTeamMember);
    });
  });
});
