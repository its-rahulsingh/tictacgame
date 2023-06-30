const Cell = require("./cell")

class Board{
    constructor (cell){
        this.cell = cell
    }

    static createBoard(){
        let cellArray = []
        for (let index = 0; index < 9; index++) {
            cellArray.push(Cell.createCell())
        }
        return new Board(cellArray)
    }

    checkCell(cellNumber){
        if (this.cell[cellNumber].mark != "z"){
            return true
        }
        return false
    }

    fillBoard(cellNumber, symbol){
        this.cell[cellNumber].mark = symbol
    }

    checkResult(){
    //     console.log(((this.cell[0].mark==this.cell[1].mark) && (this.cell[1].mark==this.cell[2].mark) && 
    //     (this.cell[1].mark!="z")) ,
    //    ((this.cell[3].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[5].mark) && 
    //     (this.cell[3].mark!="z")) ,
    //    ((this.cell[7].mark==this.cell[6].mark) && (this.cell[7].mark==this.cell[8].mark) && 
    //     (this.cell[7].mark!="z")) ,
    //    ((this.cell[0].mark==this.cell[3].mark) && (this.cell[3].mark==this.cell[6].mark) && 
    //     (this.cell[0].mark!="z")) ,
    //     ((this.cell[1].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[7].mark) && 
    //     (this.cell[1].mark!="z")) ,
    //     ((this.cell[2].mark==this.cell[5].mark) && (this.cell[5].mark==this.cell[8].mark) && 
    //     (this.cell[2].mark!="z")) ,
    //     ((this.cell[7].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[0].mark) && 
    //     (this.cell[7].mark!="z")) ,
    //     ((this.cell[6].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[8].mark) && 
    //     (this.cell[6].mark!="z")))
        if (
            ((this.cell[0].mark==this.cell[1].mark) && (this.cell[1].mark==this.cell[2].mark) && 
             (this.cell[1].mark!="z")) ||
            ((this.cell[3].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[5].mark) && 
             (this.cell[3].mark!="z")) ||
            ((this.cell[7].mark==this.cell[6].mark) && (this.cell[7].mark==this.cell[8].mark) && 
             (this.cell[7].mark!="z")) ||
            ((this.cell[0].mark==this.cell[3].mark) && (this.cell[3].mark==this.cell[6].mark) && 
             (this.cell[0].mark!="z")) ||
             ((this.cell[1].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[7].mark) && 
             (this.cell[1].mark!="z")) ||
             ((this.cell[2].mark==this.cell[5].mark) && (this.cell[5].mark==this.cell[8].mark) && 
             (this.cell[2].mark!="z")) ||
             ((this.cell[0].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[8].mark) && 
             (this.cell[0].mark!="z")) ||
             ((this.cell[6].mark==this.cell[4].mark) && (this.cell[4].mark==this.cell[2].mark) && 
             (this.cell[6].mark!="z")) ){
                return "won"
            }
        for (let index = 0; index < this.cell.length; index++) {
            // console.log(this.cell[index].mark)
            if (this.cell[index].mark=="z"){
                return "continue"
            }
        }
        return "draw"
    }

    displayBoard(){
        let boardArray = []
        for (let index = 0; index < this.cell.length; index++) {
            boardArray.push(this.cell[index].mark)
            // console.log(boardArray)
        }
        return boardArray
    }
}

module.exports = Board