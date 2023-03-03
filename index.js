const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const idList = []
const teamMembers = []

const appMenu = () => {
    function createManager(){
        console.log("Please build your team!")
        inquirer.createPromptModule([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer =>{
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter at least one character."
    
                }
            }
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's id",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "what is the team manager's office number"
            },

    
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager);
            idList.push(answers.managerId);

        })
    }
}