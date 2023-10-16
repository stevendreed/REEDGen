// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const genMD = require(`./utils/generateMarkdown`);
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// object containing all basic git license types
const licenseChoices =
[
    `None`,
    `Academic Free License v3.0`,
    `Apache license 2.0`,
];
// user prompt questions to generate a README file
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
        choices: licenseChoices,
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
    .then(answers => 
    {
        console.log({...answers});
        console.log(generateMarkdown(answers));
    //     .then(outcome =>
    //         {
    //             console.log(outcome);
    //         } // end =>
    //         ) // end then
    } // end funct
    ) // end then
    .catch(err => 
    {
        console.log(`ERROR! ${err}`);
    } // end funct
    ) // end catch
} // end init

// Function call to initialize app
init();
