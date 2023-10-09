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
        const returnExpo = ``; // empty string
        let returnAct = renderLicenseLink(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a valid link if a valid license is provided`, () =>
    {
        const testData = ``;
        const returnExpo = ``; // link
        let returnAct = renderLicenseLink(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
} // end funct
); // end describe
describe(`renderLicenseSection`, () =>
{

} // end funct
); // end describe
describe(`generateMarkdown`, () =>
{

} // end funct
); // end describe