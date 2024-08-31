const Circle = require('../circle');

describe("Cirlce", () => {
    test("should return expected rectangle", () => {
      const shape = new Circle();
      const exp = '<circle r="50" cx="50" cy="50" fill="transparent"/>'
      expect(shape.render()).toEqual(exp);
    });
  
    describe("setColor", () => {
      test("should change color of shape to blue", () => {
        const shape = new Circle();
        shape.setColor("blue");
        const color = "blue";
        expect(shape.color).toEqual(color);
      });
    });
  });
  
  