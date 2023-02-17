
// Required packages

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// Reads another file, in this case the generateMarkdown file
// fs.readFile('./utils/generateMarkdown.js' , 'utf8', (error, data) => 
// error ? console.error(error) : console.log(data)
// );

//Logs consecutive elements of process argv
// console.log(`The first element in the argument array is ${process.argv[0]}`);
// console.log(`The second element in the argument array is ${process.argv[1]}`);
// console.log(`The third element in the argument array is ${process.argv[2]}`);
// console.log(`The fourth element in the argument array is ${process.argv[3]}`);


//Assigns elements of process argv to variables
// const name = process.argv[2]
// const iterations = process.argv[3]

// console.log(`We are going to print ${name} ${iterations} times`);

//creates a loop to print 3-rd elements of process a number of times specified in 4-th element of process

// for (let i =0; i < iterations; i++) {
//     console.log(`Hello, ${name}`);
// }

// EXAMPLE INQUIRER CODE
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write your project description',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage instructions',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Chose the license type',
        name: 'license',
        choices: ['Apache license 2.0' , 'GNU General Public License 3.0', 'MIT License', 'BSD 2-clause "Simplified" License', 'BSD 3-clause "New" or "Revised" License', 'Boost Software License 2.0' , 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License 3.0', 'GNU General Public License 2.0', 'GNU Lesser General Public License 2.1' , 'Mozilla Public License 2.0' , 'The Unlicense']
      },
      {
        type: 'input',
        message: 'List the contributors',
        name: 'contributors',
      },

      {
        type: 'input',
        message: 'Enter email address for project-related questions',
        name: 'questions',
      },

      
  ])
  .then((response) => {

const readme = `<strong>${response.title}</strong><br>

<strong>Project's description</strong> <br>
${response.description}<br>

<strong>Installation instructions</strong> <br>
${response.installation}<br>

<strong>Usage instructions</strong> <br>
${response.usage}<br>

<strong>License type</strong> <br>
Project covered under the following license: ${response.license}<br>

<strong>Contributors</strong> <br>
${response.contributors}<br>

<strong>Questions</strong> <br>
Please send your questions to ${response.questions}<br>`

fs.writeFile("response.md", readme, (err) => 
err? console.error(err) : console.log("Readme created")
)
 });


// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
