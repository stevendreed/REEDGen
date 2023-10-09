// TODO: Create a function that returns a license badge based on which license is passed in

const { type } = require("os");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
{
  let retTitle = ``;
  let retToC = ``;
  let retBody = ``;
  const retFooter =
`
REEDGen by Steven Reed \`@github.com/stevendreed\`
`;
  // if (!data)
  // {
  //   return ``;
  // }
  if (typeof data.title === `string`)
  {
    retTitle +=
`
# ${data.title}
---`;
retToC += `
## Table of Contents`;
  } // end if
  if (typeof data.description === `string`)
  {
    retToC +=
`
[Description](###Description)
`;
  retBody +=
`
### Description
>
> ${data.description}
---`;
  } // end if
  if (typeof data.installation === `string`)
  {
    retToC +=
`
[Installation Instructions](###Installation-Instructions)
`;
    retBody +=
`
### Installation Instructions
>
> ${data.installation}
---`;
  } // end if
  if (typeof data.usage === `string`)
  {
    retToC +=
`
[Usage](###Usage)
`;
    retBody +=
`
### Usage
>
> ${data.usage}
---`;
  } // end if
  if (typeof data.contribution === `string`)
  {
    retToC += 
`
[Contribution Guidelines](###Contribution-Guidelines)
`;
    retBody +=
`
### Contribution Guidelines
>
> ${data.contribution}
---`;
  } // end if
  if (typeof data.tests === `string`)
  {
    retToC +=
`
[Testing](###Testing)
`
    retBody +=
`
### Testing
>
> ${data.tests}
---`;
  } // end if
  if (typeof data.license === `string`)
  {
    retToC +=
`
[License](###License)
`;
    retBody +=
`
### License
>
> ${data.license}
---`;
  } // end if
  if (typeof data.author === `string` || typeof data.email === `string`)
  {
    retToC += 
`
[Questions?](###Questions?)
`
    retBody +=
`
### Questions?
>`;
    if (typeof data.author === `string`)
    {
      retBody +=
`
> [${data.author}](https://github.com/${data.author})`;
    }
    if (typeof data.email === `string`)
    {
      retBody += 
`
> [${data.email}](mailto:${data.email})`;
    } // end if
    retBody +=
`
---`;
  } // end if
  if (retTitle || retToC || retBody)
  {
    return retTitle + retToC + retBody + retFooter;
  } // end if
  return retTitle + retToC + retBody;
} // end generateMarkdown

module.exports = generateMarkdown;
