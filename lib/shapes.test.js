const Circle = require('../shapes/Circle');
const Triangle = require('../shapes/Triangle');
const Square = require('../shapes/Square');

describe('Shape Classes', () => {

  describe('Circle', () => {
    it('should render a circle with the specified color', () => {
      const circle = new Circle('#FF0000');
      const expectedSVG = '<circle cx="150" cy="100" r="80" fill="#FF0000" />';
      expect(circle.renderShape()).toBe(expectedSVG);
    });
  });

  describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
      const triangle = new Triangle('#00FF00');
      const expectedSVG = '<polygon points="150,20 280,180 20,180" fill="#00FF00" />';
      expect(triangle.renderShape()).toBe(expectedSVG);
    });
  });

  describe('Square', () => {
    it('should render a square with the specified color', () => {
      const square = new Square('#0000FF');
      const expectedSVG = '<rect x="50" y="50" width="200" height="200" fill="#0000FF" />';
      expect(square.renderShape()).toBe(expectedSVG);
    });
  });

});
