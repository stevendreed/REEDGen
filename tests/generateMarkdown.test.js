const generateMarkdown = require(`../utils/generateMarkdown`);

/*
* license keywords:
* https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/
* customizing-your-repository/licensing-a-repository
*/
describe(`renderLicenseBadge`, () =>
{
    it(`should return an empty string if there is no license`, () =>
    {
        const testData = ``; // TODO: identify what licenses are invalid
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a MIT license badge if MIT license is passed `, () =>
    {
        const testData = `MIT`;
        const returnExp = ``; // TODO: identify what return is generated
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a Apache 2.0 license if passed`, () =>
    {
        const testData = `Apache-2.0`;
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a Creative Commons license if passed`, () =>
    {
        const testData = `CC`;
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a GNU Lesser General Public License v3.0 license if passed`, () =>
    {
        const testData = `LGPL-3.0`;
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
} // end funct
); // end describe
describe(`renderLicenseLink`, () =>
{
    it(`should return an empty string if no license`, () =>
    {
        const testData = ``;
        const returnExp = ``; // empty string
        let returnAct = renderLicenseLink(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a valid link if a valid license is provided`, () =>
    {
        const testData = ``;
        const returnExp = ``; // link
        let returnAct = renderLicenseLink(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
} // end funct
); // end describe
describe(`renderLicenseSection`, () =>
{
    it(`should return an empty string if no license section`, () =>
    {
        const testData = ``;
        const returnExp = ``; // empty string
        let returnAct = renderLicenseSection(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return the license section`, () =>
    {
        const testData = ``;
        const returnExp = ``; // TODO
        let returnAct = renderLicenseSection(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    
} // end funct
); // end describe
describe(`generateMarkdown`, () =>
{
    it(`should return an empty string if no data is provided`, () =>
    {
        const testData = ``;
        const returnExp = ``; // empty string
        let returnAct = generateMarkdown(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a markdown file`, () =>
    {
        const testData =
        {
            title: `My Test App`,
            description: `Lorem ipsum cato degagrede`,
            installation: `to install, please npm then commit the i`,
            usage: `to use, use`,
            contribution: `halp please i honger`,
            tests: `mak tests\nnot\nwar`,
            author: `testauthorgithub`,
            license: `sample notice here`,
            email: `testauthorgithub.gmail.test.com`
        };
        const returnExp = 
`
# My Test App
---
## Table of Contents
[Description](###Description)

[Installation Instructions](###Installation-Instructions)

[Usage](###Usage)

[Contribution Guidelines](###Contribution-Guidelines)

[Testing](###Testing)

[Questions?](###Questions?)

### Description

> Lorem ipsum cato degagrede
---
### Installation Instructions

> to install, please npm then the i
---
### Usage

> to use, use
---
### Contribution Guidelines

> halp please i honger
---
### Testing

> mak tests
not
war
---
### Questions?
> [testauthorgithub](https://github.com/testauthorgithub)
> [testauthorgithub.gmail.test.com](mailto:testauthorgithub.gmail.test.com)
---
REEDGen by Steven Reed \`@github.com/stevendreed\`
`;
        let returnAct = generateMarkdown(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
} // end funct
); // end describe