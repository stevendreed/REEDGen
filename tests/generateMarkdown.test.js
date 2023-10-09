const generateMarkdown = require(`../utils/generateMarkdown`);


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