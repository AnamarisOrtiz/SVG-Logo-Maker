class Shape {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    renderShape() {
      throw new Error('renderShape() must be implemented by subclasses');
    }
  }
  
  module.exports = Shape;

  

