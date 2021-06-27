class Game {
  constructor(id, name, lastPlayer, lastAction, nextPlayer, yourHouse) {
    this.id = id;
    this.name = name;
    this.lastPlayer = lastPlayer;
    this.lastAction = lastAction;
    this.nextPlayer = nextPlayer;
    this.yourHouse = yourHouse;
  }
}

export default Game;
