//DEPENDENCIES =============================================

//DATA =====================================================

//FUNCTIONS ================================================
// TODO: Create a function that returns the member's icon
function determineMemberIcon() {
  switch ("teamMember") {
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

function generateHTML(data) {
  //console.log("inside generateHTML function...");
  //console.log(data);
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="../dist/reset.css" />
    <link rel="stylesheet" type="text/css" href="../dist/style.css" />
    <title>My Team</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col team-title">
          <header>My Team</header>
        </div>
      </div>
      <div class="row">
        <div class="col card-container">
          <div class="card" style="width: 20rem">
            <div class="card-top">
              <div class="card-header card-holder">${data[0].managerName}</div>
              <div class="icon-team-type-container card-holder">
                <img
                  src="../assets/images/manager-tigger.jpg"
                  width="50"
                  height="44"
                  alt="manager tigger mug"
                />
                <p>${data[0].teamMember}</p>
              </div>
            </div>
            <div class="card-bottom">
              <ul class="list-group list-group-flush card-list">
                <li class="list-group-item">ID: ${data[0].managerId}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${data[0].managerEmail}"
                    >${data[0].managerEmail}</a
                  >
                </li>
                <li class="list-group-item">Office number: ${data[0].managerOfficeNumber}</li>
              </ul>
            </div>
          </div>
          <div class="card" style="width: 20rem">
            <div class="card-top">
              <div class="card-header card-holder">${data[1].engineerName}</div>
              <div class="icon-team-type-container card-holder">
                <img
                  src="../assets/images/gear-engineer.jpg"
                  width="50"
                  height="44"
                  alt="engineer gears"
                />
                <p>${data[1].teamMember}</p>
              </div>
            </div>
            <div class="card-bottom">
              <ul class="list-group list-group-flush card-list">
                <li class="list-group-item">ID: ${data[1].engineerId}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${data[1].engineerEmail}">${data[1].engineerEmail}</a>
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/${data[1].engineerGithub}" target="_blank"
                    >${data[1].engineerGithub}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="card" style="width: 20rem">
            <div class="card-top">
              <div class="card-header card-holder">${data[2].engineerName}</div>
              <div class="icon-team-type-container card-holder">
                <img
                  src="../assets/images/gear-engineer.jpg"
                  width="50"
                  height="44"
                  alt="engineer gears"
                />
                <p>${data[2].teamMember}</p>
              </div>
            </div>
            <div class="card-bottom">
              <ul class="list-group list-group-flush card-list">
                <li class="list-group-item">ID: ${data[2].engineerId}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${data[2].engineerEmail}"
                    >${data[2].engineerEmail}</a
                  >
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/${data[2].engineerGithub}" target="_blank"
                    >${data[2].engineerGithub}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="card" style="width: 20rem">
            <div class="card-top">
              <div class="card-header card-holder">${data[3].engineerName}</div>
              <div class="icon-team-type-container card-holder">
                <img
                  src="../assets/images/gear-engineer.jpg"
                  width="50"
                  height="44"
                  alt="engineer gears"
                />
                <p>${data[3].teamMember}</p>
              </div>
            </div>
            <div class="card-bottom">
              <ul class="list-group list-group-flush card-list">
                <li class="list-group-item">ID: ${data[3].engineerId}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${data[3].engineerEmail}">${data[3].engineerEmail}</a>
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/${data[3].engineerGithub}" target="_blank">${data[3].engineerGithub}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card" style="width: 20rem">
            <div class="card-top">
              <div class="card-header card-holder">${data[4].internName}</div>
              <div class="icon-team-type-container card-holder">
                <img
                  src="../assets/images/grad.jpg"
                  width="50"
                  height="44"
                  alt="intern graduation cap"
                />
                <p>${data[4].teamMember}</p>
              </div>
            </div>
            <div class="card-bottom">
              <ul class="list-group list-group-flush card-list">
                <li class="list-group-item">ID: ${data[4].internId}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${data[4].internEmail}"
                    >${data[4].internEmail}</a
                  >
                </li>
                <li class="list-group-item">School: ${data[4].internSchool}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

  
  `;
}

//INITIALIZATION ===========================================

//module.exports makes this file available outside to whoever require's this generateHTML.js module
module.exports = generateHTML;
