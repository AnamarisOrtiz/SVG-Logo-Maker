const Shape = require('./shapes')

class Square extends Shape {
    constructor(color) {
      super('Square', color);
    }
  
    renderShape() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = Square;
  