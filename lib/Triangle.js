const Shape = require('./shapes')
class Triangle extends Shape {
    constructor(color) {
      super('Triangle', color);
    }
  
    renderShape() {
      return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
  }
  
  module.exports = Triangle;
  
  
  