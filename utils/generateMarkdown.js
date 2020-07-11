function generateMarkdown(data) {
  return `
# Application:
${data.appName}

[<img src="https://img.shields.io/badge/I%20made%20a-custom%20badge-blue" />] ${data.repo}

## Description:
${data.appName}

## Table of Contents:
  [Intallation Steps](#installSteps)
  [Instructions](#instructions)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

## Installation Dependencies:
${data.installSteps}

## Instructions:
${data.instructions}

## License:
${data.license}

## Contributing Information:
${data.contributing}

## Tests:
${data.tests}

## Questions:
${data.image}
If you have any questions, open an issue or contact ${data.username} at ${data.email}.


`;
}

module.exports = generateMarkdown;
