const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern", () => {
  describe("constructor", () => {
    // TODO: Write a test for the Intern constructor that should take in name, id, email and school
    it("should take a name string, an id number, an email string and a school string as arguments and assert name", () => {
      // arrange
      const internName = "Jozinho";
      const internId = 5;
      const internEmail = "jozinho@hisemail.com";
      const internSchool = "Elmsford Middle School";

      // act
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      // assert
      expect(intern.name).toEqual("Jozinho");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Intern constructor that should take in name, id, email and school
    it("should take a name string, an id number, an email string and a school string as arguments and assert id", () => {
      // arrange
      const internName = "Jozinho";
      const internId = 5;
      const internEmail = "jozinho@hisemail.com";
      const internSchool = "Elmsford Middle School";

      // act
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      // assert
      expect(intern.id).toEqual(5);
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Intern constructor that should take in name, id, email and school
    it("should take a name string, an id number, an email string and a school string as arguments and assert email", () => {
      // arrange
      const internName = "Jozinho";
      const internId = 5;
      const internEmail = "jozinho@hisemail.com";
      const internSchool = "Elmsford Middle School";

      // act
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      // assert
      expect(intern.email).toEqual("jozinho@hisemail.com");
    });
  });

  describe("constructor", () => {
    // TODO: Write a test for the Intern getSchool() method that should return a string value of "Elmsford Middle School"
    it("should return a string value of Elmsford Middle School", () => {
      // arrange
      const internName = "Jozinho";
      const internId = 5;
      const internEmail = "jozinho@hisemail.com";
      const internSchool = "Elmsford Middle School";

      // act
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      // assert
      expect(intern.getSchool()).toEqual("Elmsford Middle School");
    });
  });

  describe("getRole", () => {
    // TODO: Write a test for the Intern getRole() method that should return a string value of "Intern"
    it("should return a string value of Intern", () => {
      // arrange
      const internName = "Jozinho";
      const internId = 5;
      const internEmail = "jozinho@hisemail.com";
      const internSchool = "Elmsford Middle School";
      const internRoleAkaTeamMember = "Intern";

      // act
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      // assert
      expect(intern.getRole()).toEqual(internRoleAkaTeamMember);
    });
  });
});
