// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const licenseObj =
[
    {
        name: `None`,
        keyw: `N/A`,
        url: ``,
    },
    {
        name: `Academic Free License v3.0`,
        keyw: `AFL-3.0`,
        url: ``,
    },
    {
        name: `Apache license 2.0`,
        keyw: `Apache-2.0`,
        url: ``,
    },
]
const questions =
[
    {
        name: `title`,
        type: `input`,
        message: `Enter title of your repository:`,
    },
    {
        name: `description`,
        type: `input`,
        message: `Enter a description for your repository:`,
    },
    {
        name: `installation`,
        type: `input`,
        message: `Enter installation instructions for your repository`,
    },
    {
        name: `usage`,
        type: `input`,
        message: `Enter instructions on how to use your repository`,
    },
    {
        name: `contribution`,
        type: `input`,
        message: `Enter instructions on how to contribute to your repository`,
    },
    {
        name: `license`,
        type: `list`,
        message: `Choose a license you'd like to use for your repository`,
        choices: licenseObj,
    },
    {
        name: `author`,
        type: `input`,
        message: ``,
    },
    {
        name: `email`,
        type: `input`,
        message: ``,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init()
{
    inquirer
    .prompt(questions)
    .then((answers) => 
    {
        for (let i = 0; i < answers.length; ++i)
        {
            console.log(answers[i]);
        } // end for
    } // end funct
    ) // end then
} // end init

// Function call to initialize app
init();
