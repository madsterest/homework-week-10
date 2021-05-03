// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Boost") {
    return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  } else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "The Unlicense") {
    return `![License: MPL 2.0](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else if (license === "None") {
    license = "";
    return license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "GNU GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Boost") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else if (license === "Mozilla") {
    return `!https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "The Unlicense") {
    return `http://unlicense.org/`;
  } else {
    license = "";
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    license = "";
    return license;
  } else {
    return `## License:
  Licensed under ${license}.<br/>
  For more information, visit this link.<br/>
  ${renderLicenseLink(license)}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.badge)}

 ##Description:
 <br/>
 ${data.description}
 ${data.motivation}
 ${data.function}

 ##Table of Contents:
 <br/>
 [Installation](#Installation:)<br/>
 [Useage](#Useage:)<br/>
 [Contributing](#Contributing:)<br/>
 [Tests](#Tests:)<br/>
 [License](#License:)<br/>
 [Questions](#Questions:)<br/>

 ## Installation:
 <br/>
 ${data.packages}

 ## Useage:
 <br/>
 ${data.useage}

 ## Contributing:
 <br/>
 ${data.collaborators}

 ## Tests:
 <br/>
 ${data.test}

 ${renderLicenseSection(data.badge)}
## Questions:
<br/>
For more examples of my work, please visit my GitHub at [${
    data.username
  }](https://github.com/${data.username})<br/>
or contact me at
${data.email}
`;
}

module.exports = generateMarkdown;

// #License
// ${renderLicenseBadge(data.badge)}
