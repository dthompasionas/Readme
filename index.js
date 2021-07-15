// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require(inquirer);
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
    }
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    }
    {
    type: 'input',
    message: 'What is your project name?',
    name: 'project',
    }
    {
    type: 'input',
    message: 'Please write a short description of your project?',
    name: 'description',
    }
    {
    type: 'input',
    message: 'What kind of license does your project have?',
    name: 'license',
    }
    {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'dependencies',
    }
    {
    type: 'input',
    message: 'What command should be run for running test?',
    name: 'test',
    }
    {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'repo',
    }
    {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributing',
    }
   

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(() => {

    
    })
}

// Function call to initialize app
init();
