const inquirer = require('inquirer');
var fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [

    {
        name: 'title',
        type: 'input',
        message: 'What is the project title?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Provide a description of your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Provide installation instructions here'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instruction on how your application is used.'
    },
    {
        name: 'license',
        type: 'input',
        message: 'Would you like to use a license? Please list or type none.'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'List team memebers or instructions for collaborating on future development.'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Provide instructions for testing if applicable.'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Provide your github link and/or email.'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown({ ...data }))
        }).catch((err) => {
            console.log(err);
        })
}

// function call to initialize program
init();
