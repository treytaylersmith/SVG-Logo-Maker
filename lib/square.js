const Shape = require('./shapes');

class Square extends Shape{

    constructor(x,y,width,height,rx,ry){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rx = rx|| 0;
        this.ry = ry|| 0;
    }
    render(){
        return `<rect x="${x}" y="${y}" rx="${rx}" ry="${ry}" width="${width}" height="${height} fill="${color}"/>`;
    }
}

module.exports = Square;