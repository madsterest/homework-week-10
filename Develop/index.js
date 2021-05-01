// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  { name: "title", message: "What is the title of your project?" },
  { name: "motivation", message: "What was your motivation for development?" },
  { name: "function", message: "What tasks does your program accomplish?" },
  { name: "packages", message: "What programs does the program need to run?" },
  { name: "collaborators", message: "Who collaborated on the project?" },
  { name: "badge", message: "What is your license badge?" },
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
      //   writeToFile(`${response.data}.md`, render)
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
