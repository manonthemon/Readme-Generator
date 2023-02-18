// function to generate markdown for README

function generateMarkdown(data) {

  //If else statement for choosing license badge
  let licenseBadge;
  if (data.license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache 2.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "Unlicense") {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
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

  // Generate sections of the README file with data entered by the user
  return `# ${data.title}

  ${licenseBadge}<br>

  ## Description 
  ${data.description}

  ## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Video](#video)
4. [License](#license)
5. [Contributing](#contributing)
6. [Questions](#questions)

  ## Installation
${data.installation}

## Usage
 ${data.usage}

 ## Video

 [![Demo video](/ Screenshot URL )]( Video URL)


 ## License
 Project covered under the following license: 
 - ${data.license}<br>
  
 ## Contributing
 This app was developed by:
 - ${data.contributors}
  
 ## Questions
   - Please send your questions to ${data.email}.
   - For more information visit https://github.com/${data.github}. `
}

// Exports generateMarkdown to make it available in index.js file
module.exports = generateMarkdown;
