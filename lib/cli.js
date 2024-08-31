const inquirer = require("inquirer");
const { writeFile } = require('fs/promises');
const { join } = require('path');
const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');


class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "char",
          message: "Please enter up to three characters (you may also leave this blank)",
        },
      ])
      .then((answer) => {
        console.log(answer);
        if (answer.char.length > 3) {
          console.log(new Error("Input must be 3 characters or less"));
          return;
        }

        return inquirer
          .prompt([
            {
              type: "input",
              name: "textColor",
              message: "Please enter a color for your text. Keyword or hexadecimal",
            },
            {
              type: "list",
              name: "shape",
              choices: ["Square", "Circle", "Triangle"],
            },
            {
              type: "input",
              name: "shapeColor",
              message: "Please enter a color for your shape. Keyword or hexadecimal",
            },
          ])
          .then((response) => {
            console.log(`${response.textColor} ${response.shape} ${response.shapeColor}`);
            let svg = '';
            if (response.shape === "Square") {
              const square = new Square();
              square.setColor(response.shapeColor);
              svg += square.render();
            } else if (response.shape === "Circle") {
              const circle = new Circle();
              circle.setColor(response.shapeColor);
              svg += circle.render();
            } else {
              const tri = new Triangle();
              tri.setColor(response.shapeColor);
              svg += tri.render();
            }
            svg += ` <text x='150' y='110' fill = '${response.textColor}' font-size= '80' text-anchor='middle'> `;
            svg += `${answer.char}</text></svg>`;
            svg = "<svg width= '300' height= '200'>" + svg;
            return writeFile(join(__dirname, '../examples', 'logo.svg'), svg);
          });
      });
  }
}

module.exports = CLI;



