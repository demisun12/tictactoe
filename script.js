function createPlayer(name,marker) {
    return {name,marker};
}

const board = (function (){
    const gameboard = ["","","","","","","","",""];
    return {gameboard};

    const getBoard = () => gameboard;

    const printBoard = () => {
        console.log(gameboard);
    }

    return {getBoard, printBoard};
})();

const gameFlow = {
    turn: playerOne.name,
    mark: playerOne.marker
}; //after each turn, object values should change to other players name/markers













