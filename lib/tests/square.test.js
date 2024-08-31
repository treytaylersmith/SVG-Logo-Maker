const Square = require('../square')

describe("Square", () => {
    test("should return expected rectangle", () => {
      const shape = new Square();
      const exp = '<rect x="0" y="0"  width="100" height="100" fill="transparent"/>'
      expect(shape.render()).toEqual(exp);
    });
  
    describe("setColor", () => {
      test("should change color of shape to blue", () => {
        const shape = new Square();
        shape.setColor("blue");
        const color = "blue";
        expect(shape.color).toEqual(color);
      });
    });
  });
  