const Shape = require('./shapes')
class Circle extends Shape {
    constructor(color) {
      super('Circle', color);
    }
  
    renderShape() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  module.exports = Circle;
  