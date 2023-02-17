
// Required packages

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Prints the array of process to console
console.log(process.argv);

// Reads another file, in this case the generateMarkdown file
fs.readFile('./utils/generateMarkdown.js' , 'utf8', (error, data) => 
error ? console.error(error) : console.log(data)
);

//Logs consecutive elements of process argv
console.log(`The first element in the argument array is ${process.argv[0]}`);
console.log(`The second element in the argument array is ${process.argv[1]}`);
console.log(`The third element in the argument array is ${process.argv[2]}`);
console.log(`The fourth element in the argument array is ${process.argv[3]}`);


//Assigns elements of process argv to variables
const name = process.argv[2]
const iterations = process.argv[3]

console.log(`We are going to print ${name} ${iterations} times`);

//creates a loop to print 3-rd elements of process a number of times specified in 4-th element of process

for (let i =0; i < iterations; i++) {
    console.log(`Hello, ${name}`);
}

//prints length of process argv to console
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
