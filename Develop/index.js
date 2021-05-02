// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  { name: "title", message: "What is the title of your project?" },
  { name: "description", message: "Give a brief description of your project" },
  { name: "motivation", message: "What was your motivation for development?" },
  { name: "function", message: "What tasks does your program accomplish?" },
  {
    name: "features",
    message: "What are the main features of your application?",
  },
  { name: "packages", message: "What programs does the program need to run?" },
  { name: "collaborators", message: "Who collaborated on the project?" },
  {
    type: "rawlist",
    name: "badge",
    message: "What license would you like to use?",
    choices: ["MIT", "GNU GPL", "Apache", "Boost", "Mozilla", "The Unlicense"],
  },
  { name: "username", message: "What is your GitHub username?" },
  { name: "repo", message: "What is the name of your repository?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
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
      //   writeToFile(`README.md`, render)
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
