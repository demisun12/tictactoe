function createPlayer(name,marker) {
    return {name,marker};
}

const board = (function (){
    const gameboard = ["","","","","","","","",""];
    return {gameboard};

    const getBoard = () => gameboard;
})();

const gameFlow = {
    turn: playerOne.name,
    mark: playerOne.marker
}; //after each turn, object values should change to other players name/markers

function playTurn(spot,player) {

}

function changePlayer(player) {

}