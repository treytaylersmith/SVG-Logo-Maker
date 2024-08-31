const Triangle = require('../triangle');

describe("Triangle", () => {
    test("should return expected rectangle", () => {
      const shape = new Triangle();
      const exp = '<polygon points="150, 18 244, 182 56, 182" fill="transparent" />'
      expect(shape.render()).toEqual(exp);
    });
  
    describe("setColor", () => {
      test("should change color of shape to blue", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        const color = "blue";
        expect(shape.color).toEqual(color);
      });
    });
  });
  