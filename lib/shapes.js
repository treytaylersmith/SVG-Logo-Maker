class Shapes{
    constructor(text){
        this.color = 'transparent';
        this.text = text || '';
    }
    setColor(color){
        this.color = color;
    }
    render(){
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;