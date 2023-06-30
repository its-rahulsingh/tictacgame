const Board = require("./board")
const Player = require("./player")

class Game{
    constructor(player, board, turn, isActive){
        this.player = player
        this.board = board
        this.turn = turn
        this.isActive = isActive
    }

    static newGame(player0, player1){
        let players = [Player.createPlayers(player0, "X"), Player.createPlayers(player1, "0")]
        let board = Board.createBoard()
        let turn = 0
        return new Game(players, board, turn, true)
    }

    play(cellNumber){
        if (!this.isActive){
            return "Game over"
        }
        let isCellMarked = this.board.checkCell(cellNumber)
        if(isCellMarked){
            return "Cell is already marked"
        }
        let player
        if (this.turn%2==0){
            player = this.player[0].name
            console.log("Turn of ", this.player[0].name,": ", cellNumber)
            this.board.fillBoard(cellNumber, this.player[0].symbol)
        }
        else{
            player = this.player[1].name
            console.log("Turn of", this.player[1].name,": ", cellNumber)
            this.board.fillBoard(cellNumber, this.player[1].symbol)
        }
        
        console.log(this.board.displayBoard())
        let checkResult = this.board.checkResult()
        // console.log("checkresult",checkResult)
        if(checkResult == "draw"){
            this.isActive = false
            return `Match drawn`
        }
        else if(checkResult == "won"){
            this.isActive = false
            return `${player} won the game`
        }
        this.turn+=1
        return "Continue"
    }
}

module.exports = Game