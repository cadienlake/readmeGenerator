// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Enter the project description:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter the contribution guidelines:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter the test instructions:",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    choices: ["MIT", "none"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your gitHub username?",
    name: "profile",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeData = generateMarkdown(data);
  return fs.writeFileSync(fileName, readMeData);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("generated_README.md", response);
  });
}
``
// Function call to initialize app
init();
