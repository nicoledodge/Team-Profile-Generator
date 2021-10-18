// create different requirer for classes- employee,engineer,manager,intern
const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./dist/style")

// const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


const finalTeam = [];

function firstPrompt() {
    inquirer
        .prompt([
            {
                message: "Write the name of your team here:",
                name: "teamname",
            }
        ])
        .then(function (data) {
            const teamName = data.teamname;
            //adds to final team array of information
            finalTeam.push(teamName);
            //goes straight into adding the manager
            addManager();
        })
}

//add managers function FIRST then all the team members
function addManager() {
    inquirer
        .prompt([
            {
                message: "What is your Manager's  name?",
                name: "name"
            },
            {
                message: "What is your Manager's  email?",
                name: "email"
            },
            {
                type: "number",
                message: "What is the Team Manager's Office Number?",
                name: "officeNum"
            },
        ])
        .then(function (data) {
            //leads back to add team members to see if any other people need to be added
            const name = data.name
            const id = 1
            const email = data.email
            const officeNum = data.officeNum
            const teamMember = new Manager(name, id, email, officeNum)
            finalTeam.push(teamMember)
            addTeamMembers();
        });
}

//add team members function
function addTeamMembers() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add another Team Member?",
                choices: ["Yes, add Engineer", "Yes, add Manager", "Yes, add Intern", "No, create my Team Profile"],
                name: "addNewMember"
            }
        ])
        //run through this list for every team member and once added everyone, lead to the compile team function to add everything to HTML
        .then(function (data) {
            //maybe make this a switch case?
            // let addNewMember;
            if (data.addNewMember === "Yes, add Engineer") {
                addEngineers();
            }
            if (data.addNewMember === "Yes, add Manager") {
                addManager();
            }
            if (data.addNewMember === "Yes, add Intern") {
                addInterns();
            }
            if (data.addNewMember === "No, create my Team Profile") {
                compileTeam();
            }

        })
}

// add engineers
function addEngineers() {
    inquirer
        .prompt([
            {
                message: "What is the Engineer's  name?",
                name: "name"
            },
            {
                message: "What is your Engineer's  email?",
                name: "email"
            },
            {
                message: "What is your Engineer's  Github?",
                name: "github"
            }
        ])
        .then(function (data) {
            const name = data.name
            const id = finalTeam.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeam.push(teamMember)
            addTeamMembers();
        })
}

// add interns
function addInterns() {
    inquirer
        .prompt([
            //ask the interns school as well
            {
                message: "What is your Intern's  name?",
                name: "name"
            },
            {
                message: "What is your Intern's  email?",
                name: "email"
            },
            {
                message: "What is your Intern's School?",
                name: "school"
            }
        ])
        .then(function (data) {
            //then head to add any and all additional team members without specific roles
            const name = data.name
            const id = finalTeam.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeam.push(teamMember)
            addTeamMembers();
        })
}

// function compile team altogether - put HTML in this with the final team cards
function compileTeam() {
    // console.log("Team Created!");

    const teamArray = []
    const htmlBeginning =
        //back-tick that starts HTML
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeam[1]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
    ${style}
</style>
</head>
<body>
    <div class="banner-bar">
        <h1>${finalTeam[0]}</h1>
    </div>
    <div class="card-container">
`
    teamArray.push(htmlBeginning);
    //for loop to append cards to html depending on how many are filled out
    for (let i = 0; i < finalTeam.length; i++) {
        let officeNum;
        let card = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeam[i].name}</h2>
                <h2>${finalTeam[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeam[i].id}</p>
                <p>Email: <a href="mailto:${finalTeam[i].email}">${finalTeam[i].email}</a>></p>
        `
        if (finalTeam[i].officeNum) {
            card += `
            <p>Office Number: ${finalTeam[i].officeNum}</p>
            `
        }
        if (finalTeam[i].github) {
            card += `
            <p>Github: <a href="https://github.com/${finalTeam[i].github}"</a></p>
            `
        }
        if (finalTeam[i].school) {
            card += `
            <p>School: ${finalTeam[i].school}</p>
            `
        }
        card += `
        </div>
        </div>
        `
        teamArray.push(card);
        const htmlEnd =
            `
            </body>
            </html>
            `
        teamArray.push(htmlEnd);
        console.log(teamArray);
    }

    fs.writeFile('./dist/index.html', `${teamArray}`, function (err) {
        if (err) throw err;
        console.log('Your team profile has been successfully created! Check it out at index.html!');
    });
    //fs write file to generated html
    // const writeFile = teamArray => {
    //     fs.writeFile('./dist/index.html', teamArray.join(``), function (err) {
    //         // if there is an error
    //         if (err) {
    //             console.log(err);
    //             // when the profile has been created
    //         } else {
    //             console.log("Your team profile has been successfully created! Check it out at index.html!")
    //         }
    //     })
    // }
}

//then run the first prompt to start the whole page
firstPrompt();