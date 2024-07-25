# SVG-Logo-Maker

 [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  Welcome to the SVG Logo Generator! This command-line application allows you to create a simple SVG logo by providing text, colors, and a shape.
  ![SVG Logo Generator](https://github.com/AnamarisOrtiz/SVG-Logo-Maker/blob/main/svg-maker.gif?raw=true)


  ## Installation
  Javascript
  A text editor or IDE for running the script
  Node.js

  ## Usage
  Clone the repository or download the script.

  Open a terminal and navigate to the directory containing the script.

  Run the script using node.js:

  Follow the prompts to enter the required information:

  Text: Enter up to three characters. 
  Text Color: Enter a color keyword (e.g., red) or a hexadecimal number (e.g., #ff0000). 
  Shape: Choose from the list of shapes: circle, triangle, square. 
  Shape Color: Enter a color keyword (e.g., blue) or a hexadecimal number (e.g., #0000ff). 
  After providing all inputs, the script will generate an SVG file named logo.svg and print "Generated logo.svg" in the command line.

  Open the logo.svg file in a web browser to view your 300x200 pixel image that matches the entered criteria. 

  ## Licenses
    This project is covered under the MIT license.

  ## Contributing
  Contributions are welcome! Please feel free to submit a pull request.

  ## Tests
  To ensure the functionality of the SVG Logo Generator, you can run the following tests using Jest, a JavaScript testing framework. These tests cover different scenarios for user input and verify the correct creation of the logo.svg file.

  Running Tests
  Create a file named shapes.test.js in the same directory as your main script.

  Add the following test cases to the shapes.test.js file:

  Update your package.json to include a test script if not already present:

  Run the tests using the following command:

  npm test

  Test Cases
  Should generate logo.svg file: Verifies that the logo.svg file is created.
  Text input should be up to 3 characters: Ensures that the text input does not exceed three characters.
  Text color should be a valid color keyword or hex number: Checks that the text color is a valid color keyword or hexadecimal number.
  Thould choose a valid shape: Confirms that the shape choice is one of the valid options: circle, triangle, or square.
  Shape color should be a valid color keyword or hex number: Checks that the shape color is a valid color keyword or hexadecimal number.
  By running these tests, you can ensure that the SVG Logo Generator works as expected and handles various input scenarios correctly.

  Feel free to add more tests to cover additional edge cases and scenarios!

 

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/AnamarisOrtiz  
  Email: anamarisortiz@hotmail.com

  ## Credits
  Anamaris Ortiz

