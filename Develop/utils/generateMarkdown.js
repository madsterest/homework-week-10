// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT]https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPL") {
    return `![License: GPL v3]https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "Apache") {
    return `![License]https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Boost") {
    return `![License]https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  } else if (license === "Mozilla") {
    return `![License: MPL 2.0]https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "The Unlicense") {
    return `![License: MPL 2.0]https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else {
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
  return `#License
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.badge)}

 #Description
 ${data.description}
 ${data.motivation}
 ${data.function}


 #Installation
 ${data.packages}

 #Useage
 ${data.features}

 #Contributing
 ${data.collaborators}

 #Tests


 ${renderLicenseSection(data.badge)}
`;
}

module.exports = generateMarkdown;

// #License
// ${renderLicenseBadge(data.badge)}
