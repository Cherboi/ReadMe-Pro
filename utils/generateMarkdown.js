// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  ##
  
  
  ##Description:
  ${data.description}
  ##Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Credits:
  ${data.credits}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.test}
  ## Contact Informaion:
  - GitHub: [${data.github}](https://github.com/${data.github})
  `;

;
}

module.exports = generateMarkdown;