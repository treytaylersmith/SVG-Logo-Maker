const Shape = require('./shapes');

class Square extends Shape{

    constructor(){
        super();
    }
    render(){
        return `<rect x="0" y="0"  width="100" height="100" fill="${this.color}"/>`;
    }
}

module.exports = Square;