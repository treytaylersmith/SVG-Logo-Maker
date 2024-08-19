const Shapes = require("../shapes.js");

describe("Shapes", () => {
  test("should throw error if render() is called", () => {
    const shape = new Shapes();
    const err = new Error("Child class must implement a render() method.");
    expect(shape.render).toThrow(err);
  });

  describe("setColor", () => {
    test("should change color of shape to blue", () => {
      const shape = new Shapes();
      shape.setColor("blue");
      const color = "blue";
      expect(shape.color).toEqual(color);
    });
  });
});
