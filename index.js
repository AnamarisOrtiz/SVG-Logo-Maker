const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');


function generateSVG(text, textColor, shapeInstance) {
  const shapeSVG = shapeInstance.renderShape();

  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
}
const outputDir = path.join(__dirname, 'examples');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 || 'Please enter up to three characters only.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ])
  .then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    let shapeInstance;
    switch (shape) {
      case 'Circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'Triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'Square':
        shapeInstance = new Square(shapeColor);
        break;
    }

    const svg = generateSVG(text, textColor, shapeInstance);
    const timestamp = Date.now();
    const outputPath = path.join(outputDir, `logo_${timestamp}.svg`);
    fs.writeFileSync(outputPath, svg);
    console.log(`Generated ${outputPath}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });