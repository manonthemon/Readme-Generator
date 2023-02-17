//TODO ADD A VIDEO


//Packages

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// Questions prompts
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter your project title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter your project description:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage instructions:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Select license type:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Unlicense' , 'Creative Commons', 'Mozilla Public']
      },
      {
        type: 'input',
        message: 'Enter contributors:',
        name: 'contributors',
      },

      {
        type: 'input',
        message: 'Enter tests used:',
        name: 'tests',
      },

      {
        type: 'input',
        message: 'Enter email address for project-related questions:',
        name: 'email',
      },

      {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
      },

    // Generating the readme file using the generate Markdown function and fs.writeFile
  ])
  .then((response) => {

  const readme = generateMarkdown(response)

fs.writeFile("README.md", readme, (err) => 
err? console.error(err) : console.log("Readme created")
)
 });