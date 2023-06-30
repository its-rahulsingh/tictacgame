class Cell{
    constructor(mark){
        this.mark=mark
    }
    static createCell(){
        return new Cell("z")
    }
}

module.exports = Cell