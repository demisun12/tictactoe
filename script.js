function createPlayer(name,marker) {
    return {name,marker};
}

const board = (function (){
    const gameboard = ["","","","","","","","",""];

    const getBoard = () => gameboard;


    const updateBoard = (place, mark) => {
        if (gameboard[place] === "") {
            gameboard[place] = mark;
            return true;
        }
        return false;
    };

    const printBoard = () => {
        console.log(`
         ${gameboard[0] || " "} | ${gameboard[1] || " "} | ${gameboard[2] || " "}
        -----------
         ${gameboard[3] || " "} | ${gameboard[4] || " "} | ${gameboard[5] || " "}
        -----------
         ${gameboard[6] || " "} | ${gameboard[7] || " "} | ${gameboard[8] || " "}
        `);
    };


    return {getBoard, updateBoard, printBoard};
})();

const gameFlow = {
    turn: playerOne.name,
    mark: playerOne.marker
}; //after each turn, object values should change to other players name/markers













