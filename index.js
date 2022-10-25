// Include 'fs' and 'path' packages for outputting generated README
const fs = require ('fs');
const path = require('path');
// Include 'inquirer' package to process user's input
const inquirer = require('inquirer');
// Include utils
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter a title for your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information for your project:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license for your application:',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'BSD 3', 'GPL v3', 'None'],
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions for your project:',
        name: 'test',
    },
];

// Function that writes the user's README to the file system using the fs package
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// Function that initializes app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(`Generating README.md to ${process.cwd()}...`);
            writeToFile('README.md', generateMarkdown({ ...response }))
        });
}

// Function call to initialize app
init();
