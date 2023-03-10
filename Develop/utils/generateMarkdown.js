// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">\n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](#license) \n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
  
  - This project is licensed under ${license}.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Description
  >  ${data.description}
  
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  # Installation
  -${data.installation}
  
  # Usage
  -${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  # Contributing
  -${data.contributing}
  
  # Tests
  -${data.tests}
  
  # Questions
  -You can find me at https://github.com/${data.profile} and email me at ${data.email} for any further questions.
`;
}

module.exports = generateMarkdown;
