class Player{
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }

    static createPlayers(name, symbol){
        return new Player (name, symbol)
    }
}

module.exports = Player