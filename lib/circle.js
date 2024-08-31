const Shape = require('./shapes');

class Circle extends Shape{

    constructor(){
        super();
    }
    render(){
        return `<circle r="50" cx="50" cy="50" fill="${this.color}"/>`;
    }
}

module.exports = Circle;