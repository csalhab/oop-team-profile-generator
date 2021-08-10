//DEPENDENCIES =============================================
//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genHTML = require("./src/generateHtml");

//DATA =====================================================
const filename = "index.html";
let teamArray = [];

//Create an array of initial questions for user input
const initialManagerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the team manager's id?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the team manager's office number?",
  },
];

//Create an array of team member(s) Manager selects
const selectTeamMemberQuestion = [
  {
    type: "list",
    name: "teamMember",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];

//Create an array of Engineer questions for user input
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is your engineer's id?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?",
  },
];

//Create an array of Intern questions for user input
const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is your intern's id?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school?",
  },
];

//FUNCTIONS ================================================

// TODO: Create a function to write Index.html file
function writeToFile(fileName, answers) {
  fs.writeFile(filename, genHTML(answers), (err) => {
    if (err) throw err;
    console.log("success, the file has been created!");
  });
}

//ask for Engineer info
function captureEngineerInfo() {
  inquirer.prompt(engineerQuestions).then(function (engineerInfo) {
    teamArray.push(engineerInfo);
    console.log("inside engineer: ");
    console.log(teamArray);
    selectTeamMember();
  });
}

//ask for Intern info
function captureInternInfo() {
  inquirer.prompt(internQuestions).then(function (internInfo) {
    teamArray.push(internInfo);
    console.log("inside intern: ");
    console.log(teamArray);
    selectTeamMember();
  });
}

function teamFinished() {
  console.log("finished, array: ");
  console.log(teamArray);
}

//ask for Manager to select a team member type
function selectTeamMember() {
  inquirer.prompt(selectTeamMemberQuestion).then(function (selectedMember) {
    teamArray.push(selectedMember);
    if (selectedMember.teamMember === "Engineer") {
      captureEngineerInfo();
    } else if (selectedMember.teamMember === "Intern") {
      captureInternInfo();
    } else {
      teamFinished();
    }
  });
}

//USER INTERACTIONS ========================================
// TODO: Create a function to initialize app, ask for Manager info
function init() {
  inquirer
    .prompt(initialManagerQuestions)
    .then(function (managerAnswers) {
      teamArray.push(managerAnswers);
      selectTeamMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("error if: " + error.isTtyError);
      } else {
        // Something else went wrong
        console.log("error else: " + error);
      }
    });
}

//INITIALIZATION ===========================================
// Function call to initialize app
init();
