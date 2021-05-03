// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation for development?",
  },
  { name: "function", message: "What tasks does your program accomplish?" },
  {
    type: "input",
    name: "useage",
    message: "How does a user operate your product?",
  },
  {
    type: "input",
    name: "packages",
    message: "What programs does the program need to run?",
  },
  { name: "collaborators", message: "Who collaborated on the project?" },
  {
    type: "input",
    name: "test",
    message: "What test are available and how do they function?",
  },
  {
    type: "rawlist",
    name: "badge",
    message: "What license would you like to use?",
    choices: [
      "MIT",
      "GNU GPL",
      "Apache",
      "Boost",
      "Mozilla",
      "The Unlicense",
      "None",
    ],
  },
  { type: "input", name: "username", message: "What is your GitHub username?" },
  { type: "input", name: "email", message: "What is your email address?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) return console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  //launch iqurier.prompt
  //.then to gather the responses and generate markdown
  //calls writeToFile function to create a file using fs
  inquirer
    .prompt(questions)
    .then((response) => {
      let render = generateMarkdown(response);
      console.log(render);
      writeToFile(`README.md`, render);
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
