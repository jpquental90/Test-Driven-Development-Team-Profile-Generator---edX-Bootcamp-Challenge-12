const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// Function to gather information about the team manager
function gatherManagerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:"
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        showMenu();
    });
}

// Function to show the menu and handle user choices
function showMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What do you want to do?",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ]).then((answers) => {
        if (answers.choice === "Add an engineer") {
            gatherEngineerInfo();
        } else if (answers.choice === "Add an intern") {
            gatherInternInfo();
        } else {
            generateHTML();
        }
    });
}

// Function to gather information about an engineer
function gatherEngineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:"
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        showMenu();
    });
}

// Function to gather information about an intern
function gatherInternInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:"
        }
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        showMenu();
    });
}

// Function to generate HTML and write it to a file
function generateHTML() {
    const html = render(teamMembers);
    fs.writeFileSync(outputPath, html);
    console.log(`The team profile has been generated! Check ${outputPath}`);
}

gatherManagerInfo();