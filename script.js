function createPlayer(name, marker) {
    return { name, marker };
}

const board = (function () {
    const gameboard = ["", "", "", "", "", "", "", "", ""];

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

    return { getBoard, updateBoard, printBoard };
})();

const playGame = function (playerOneName, playerTwoName) {
    const GameBoard = board;

    const players = [
        createPlayer(playerOneName, "X"),
        createPlayer(playerTwoName, "O")
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const checkWinner = () => {
        const gb = GameBoard.getBoard();
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const [a, b, c] of winCombos) {
            if (gb[a] && gb[a] === gb[b] && gb[a] === gb[c]) {
                return true;
            }
        }
        return false;
    };

    const checkTie = () => {
        return GameBoard.getBoard().every(cell => cell !== "");
    };

    const printNewRound = () => {
        GameBoard.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (space) => {
        const success = GameBoard.updateBoard(space, getActivePlayer().marker);
        if (!success) {
            console.log("That space is taken!");
            return;
        }

        if (checkWinner()) {
            GameBoard.printBoard();
            console.log(`${getActivePlayer().name} wins!`);
            return;
        }

        if (checkTie()) {
            GameBoard.printBoard();
            console.log("It's a tie!");
            return;
        }

        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();
    return { playRound, getActivePlayer };
};

// Usage:
const game = playGame("Alice", "Bob");
// game.playRound(0); etc.
