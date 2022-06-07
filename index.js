// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log("Welcome to my README Generator!!!!!!")
console.log("Awnser the following qeustions to generate a high qulity README for your project")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project?",
        validate: your_Input => {
            if(your_Input) {
                return true;
            } else{
                console.log('Enter a Title to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Description",
        message: "Provide a Short description explaning your project",
        validate: your_description => {
            if(your_description) {
                return true;
            } else{
                console.log('Enter a Description to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Installation",
        message: "How to Instale README",
        validate: your_installation  => {
            if(your_installation) {
                return true;
            } else{
                console.log('Enter the steps of installation to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Usage",
        message: "How do you use this project?",
        validate: your_usage => {
            if(your_usage) {
                return true;
            } else{
                console.log('Enter the information to use this project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Credits",
        message: "List your collaborators,if any, with links to their GitHub profiles.",
        validate: your_credits => {
            if(your_credits) {
                return true;
            } else{
                console.log('Enter a Title to continue!');
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "License",
        message: "Choose a license that will best suit your ",
        choices: ['MPL 2.0','GNU','Apache','MIT','None of the above'],
        validate: your_license => {
            if(your_license) {
                return true;
            } else{
                console.log('Please select a licese for your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Contribution",
        message: "How can users contribute to this project?",
        validate: your_contribution => {
            if(your_contribution) {
                return true;
            } else{
                console.log('Provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "Test",
        message: "How does the user test this project?",
        validate: your_test => {
            if(your_Test) {
                return true;
            } else{
                console.log('Pexplain how to test this project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub Username (Required)",
        validate: GitHub_input=> {
            if(GitHub_input) {
                return true;
            } else{
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.watchFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }

        console.log("Success! you can now preview you README file");

    });

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("READ.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();