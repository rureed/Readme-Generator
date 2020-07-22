function generateMarkdown(data) {
  return `
# Application:
${data.appName}



<img src=https://img.shields.io/badge/rureed-bootcamp-orange />

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
![GitHub Profile Image](${data.image})
If you have any questions, open an issue or contact ${data.name} at ${data.email}.


`;
}

module.exports = generateMarkdown;
