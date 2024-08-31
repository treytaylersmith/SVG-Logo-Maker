const Shape = require('./shapes');

class Circle extends Shape{

    constructor(){
        super();
    }
    render(){
        return `<circle r="100" cx="150" cy="100" fill="${this.color}"/>`;
    }
}

module.exports = Circle;