// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    license = "";
    return license;
  } else {
    return license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 #Description
 ${data.motivation}
 ${data.function}

 #Installation
 ${data.packages}

 #Collaborators
 ${data.collaborators}
`;
}

module.exports = generateMarkdown;

// #License
// ${renderLicenseBadge(data.badge)}
