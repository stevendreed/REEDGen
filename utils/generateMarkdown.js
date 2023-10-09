// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
---
## Table of Contents
[Description](###Description)

[Installation Instructions](###Installation-Instructions)

[Usage](###Usage)

[Contribution Guidelines](###Contribution-Guidelines)

[Testing](###Testing)

[Questions?](###Questions?)

### Description

> ${data.description}
---
### Installation Instructions

> ${data.installation}
---
### Usage

> ${data.usage}
---
### Contribution Guidelines

> ${data.contribution}
---
### Testing
> ${data.tests}
---
### Questions?
> [${data.author}](https://github.com/${data.author})
[${data.email}](mailto:${data.email})
---
REEDGen by Steven Reed \`@github.com/stevendreed\`
`;
}

module.exports = generateMarkdown;
