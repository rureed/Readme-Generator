const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your GitHub name:"
    },
    {
        type: "input",
        name: "appName",
        message: "Enter the Project name:"
    },
    {
        type: "input",
        name: "appDescription",
        message: "Enter a short description:"
    },
    {
        type: "input",
        name: "installSteps",
        message: "Enter command needed to install dependencies:"
    },
    {
        type: "input",
        name: "instructions",
        message: "Enter usage instructions:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select your license:"
        default: "None",
        choices: [
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter info about contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter command to run test:"
    },
];


function writeToFile(fileName, data) {
}

function init() {
 
}

init();
