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
        const testData = ``; // TODO: identify how to pass a license into function
        const returnExp = ``; // TODO: identify what return is generated
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a Apache 2.0 license if passed`, () =>
    {
        const testData = ``; // TODO: identify what licenses are invalid
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a creative commons license if passed`, () =>
    {
        const testData = ``; // TODO: identify what licenses are invalid
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
    it(`should return a GNU Lesser General Public License v3.0 license if passed`, () =>
    {
        const testData = ``; // TODO: identify what licenses are invalid
        const returnExp = ``; // expecting an empty string
        let returnAct = renderLicenseBadge(testData);

        expect(returnAct).toEqual(returnExp);
    } // end funct
    ); // end it
} // end funct
); // end describe
describe(`renderLicenseLink`, () =>
{

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