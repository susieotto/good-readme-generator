// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents<br>
**[Installation](#Installation)**</br>
**[Usage](#Usage)**</br>
**[License](#License)**</br>
**[Contributing](#Contributing)**</br>
**[Tests](#Tests)**</br>
**[Questions](#Questions)**</br>

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions you can reach me at:
${data.questions}

<p align="left" margin="20px"> 
    <a>
    <img src="https://img.shields.io/badge/:)-yellow?style=plastic" /></a>

</p>

`;


}

module.exports = generateMarkdown;

