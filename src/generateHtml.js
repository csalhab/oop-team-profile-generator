//DEPENDENCIES =============================================

//DATA =====================================================

//FUNCTIONS ================================================
// TODO: Create a function that returns the member's icon
function determineMemberIcon(teamMember) {
  switch (teamMember) {
    case "Manager":
      return "../assets/images/manager-tigger.jpg";
    case "Engineer":
      return "../assets/images/gear-engineer.jpg";
    case "Intern":
      return "../assets/images/grad.jpg";
    default:
      return "../assets/images/manager-tigger.jpg";
  }
}

// TODO: Create a function to generate markdown for README
function generateHTML(data) {
  return `

    `;
}

//INITIALIZATION ===========================================
determineMemberIcon();

//module.exports makes this file's generateHTML function available outside to whoever require's this generateHTML.js module
module.exports = generateHTML;
