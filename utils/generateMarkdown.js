// function to generate markdown for README

function generateMarkdown(data) {

  let licenseBadge;
  if (data.license === "MIT") {
    licenseBadge = "![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)";
  } else if (data.license === "Apache 2.0") {
    licenseBadge = "![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)";
  } else if (data.license === "GPL 3.0") {
    licenseBadge = "![GPL 3.0 License](https://img.shields.io/badge/license-GPL%203.0-blue.svg)";
  }
  else if (data.license === "Creative Commons") {
    licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  }
  else if (data.license === "Mozilla Public") {
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
  
  else {
    licenseBadge = "";
  }


  return `# ${data.title}

  ${licenseBadge}<br>

  ## Description 
  ${data.description}

  ## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Questions](#questions)

  ## Installation
${data.installation}

## Usage
 ${data.usage}
  
 ## License
 Project covered under the following license: 
 - ${data.license}<br>
  
 ## Contributors
 ${data.contributors}
  
 ## Questions
   - Please send your questions to ${data.email}.
   - For more information visit https://github.com/${data.github} `
}
module.exports = generateMarkdown;
