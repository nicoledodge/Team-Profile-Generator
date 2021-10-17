// create different requirer for classses- employee,engineer,manager,intern
const inquirer = require("inquirer");
// const fs = require("fs";


const finalTeamArray = [];

function firstPrompt() {
    inquirer.prompt([
        "Write the name of your team here"
    ])
    // .then (function(data)){
    //     const teamName = data.teamname
    // }
}

//add managers function
function addManager() {
    inquirer.prompt([
        {
            message: "What is your Manager's  name?",
            name: "name"
        },
        {
            message: "What is your Manager's  email?",
            name: "email"
        }
    ]);
}

//add team members function
function addTeamMembers() {
    inquirer.prompt([{
        message:
        name
:
}
])
    ;
}

// add engineers
function addEngineers() {
    inquirer.prompt()
}

// add interns
function addInterns() {
    inquirer.prompt(
        //ask the intern's school
    )
}

// function compile team altogether - put HTML in this with the final team cards
//then run the starting prompt
