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

const playGame = (function (playerOne, playerTwo){
    const GameBoard = board;

    const players = [
        createPlayer(playerOne,0),
        createPlayer(playerTwo,1)
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        GameBoard.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (space) => {
        GameBoard.placeMark(space, getActivePlayer().marker);
        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();

    return {playRound, getActivePlayer};
})

const game = playGame();











