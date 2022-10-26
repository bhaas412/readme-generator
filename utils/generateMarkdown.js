// This function renders the license badge based on the user's selection
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'BSD 3':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'GPL v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'None':
            return '';
    }
}

// This function renders the link to the license section in the Table of Contents if a license was selected
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `* [License](#license)`;
    } else {
        return '';
    }
}

// This function renders the license section if a license was selected
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
        
    This project is licensed under the ${license} license.`;
    }
    else {
        return '';
    }
}

// This function generates the entire README markdown
// The data arg contains key-value pairs for the response to each question prompt (value accessed via the name property of the question object)
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  ${renderLicenseLink(data.license)}
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install the necessary dependencies, run the following command at the root of the project:
  
  \`\`\`bash
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  To run tests, run the following command at the root of the project:
  
  \`\`\`bash
  ${data.test}
  \`\`\`
  
  ## Questions
  
  You can find my GitHub [here](https://github.com/${data.username}/) to see more of my work.

  If you have any additional questions, you can contact me via email at ${data.email}.

`;
}

module.exports = generateMarkdown;
