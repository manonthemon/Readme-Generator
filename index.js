const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log(process.argv);


console.log(`The first element in the argument array is ${process.argv[0]}`);
console.log(`The second element in the argument array is ${process.argv[1]}`);
console.log(`The third element in the argument array is ${process.argv[2]}`);
console.log(`The fourth element in the argument array is ${process.argv[3]}`);

const name = process.argv[2]
const iterations = process.argv[3]

console.log(`We are going to print ${name} ${iterations} times`);

for (let i =0; i < iterations; i++) {
    console.log(`Hello, ${name}`);
}

console.log(`The length of the process array is ${process.argv.length}`);


//EXAMPLE INQUIRER CODE
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );




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
