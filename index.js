const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//const Choices = require("inquirer/lib/objects/choices");
//const Choice = require("inquirer/lib/objects/choice");

//global array to hold team info
const group = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function getEmployeeInfo() {
    return inquirer
            .prompt([

            {
                type: "list",
                name: "employee",
                message: "Are you an Engineer, Intern, or Manager?",
                choices: ['Engineer', 'Manager', 'Intern'],
            }, 
            {
            type: "input",
                name: "name",
                message: "Input your name?"
            },
            {
                type: "input",
                name: "id",
                message: "input work id?"   
            },
            {
                type: "input",
                name: "email",
                message: "input email?"
            }
        ])
            .then(answer => {
                if(answer.employee == "Engineer") {
                    return addEngineer(answer);
                }
                else if(answer.employee == "Intern") {
                    return addIntern(answer);
                }
                else if(answer.employee == "Manager") {
                    return addManager(answer);
                }
            })
            .catch(function(err) {
                console.log("Wrong job position!!");
                console.log(err);
            });
}

getEmployeeInfo();
