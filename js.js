function Gameboard() {
    let board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    const getBoard = () => board;

    const addMarker = (cell, player) => {
        if (board[cell] === null) {
            board[cell] = player.marker;
        }
    };

    const resetBoard = () => {
        board = [
            null, null, null,
            null, null, null,
            null, null, null
        ];
    };

    const printBoard = () => {
        console.log(board);
    };

    return { getBoard, addMarker, resetBoard, printBoard };
}

function GameController(playerOne, playerTwo) {
    const board = Gameboard();

    const players = [{
        name: playerOne,
        marker: "X"
    }, {
        name: playerTwo,
        marker: "O"
    }];

    let currentPlayer = players[0];

    const switchPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const getCurrentPlayer = () => currentPlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getCurrentPlayer().name}'s turn.`);
    };

    const playRound = (cell) => {
        board.addMarker(cell, getCurrentPlayer());

        const checkWin = () => {
            const winCombo = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            const boardState = board.getBoard();
            for (const combo of winCombo) {
                const [a, b, c] = combo;
                if (boardState[a] !== null && boardState[a] === boardState[b] && boardState[b] === boardState[c]) {
                    if (boardState[a] === "X") {
                        return 'Player 1 wins!';
                    } else if (boardState[a] === "O") {
                        return 'Player 2 wins!';
                    }
                }
            }

            if (boardState.every(cell => cell !== null)) {
                return `It's a tie!`;
            }
            return null;
        };

        const result = checkWin();
        if (result) {
            console.log(result);
            return result; // Return the result to handle end of game in the UI
        }

        switchPlayer();
        printNewRound();
    };

    const resetGame = () => {
        board.resetBoard();
        currentPlayer = players[0];
    };

    printNewRound();
    return { playRound, getCurrentPlayer, getBoard: board.getBoard, resetGame };
}

function ScreenController() {
    const playerOneInput = document.querySelector("#playerOne");
    const playerTwoInput = document.querySelector("#playerTwo");
    const startBtn = document.querySelector("#start");
    const resetBtn = document.querySelector("#reset");
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector(".board");
    const inputSection = document.querySelector(".input");

    let game;

    const startGame = () => {
        const playerOneName = playerOneInput.value || 'Player 1';
        const playerTwoName = playerTwoInput.value || 'Player 2';

        game = GameController(playerOneName, playerTwoName);

        inputSection.style.display = 'none';
        boardDiv.addEventListener("click", clickHandlerBoard); // Re-add event listener
        updateScreen();
    };

    const resetGame = () => {
        game.resetGame();
        updateScreen();
        inputSection.style.display = 'block';
    };

    const updateScreen = () => {
        boardDiv.textContent = "";

        const board = game.getBoard();
        const activePlayer = game.getCurrentPlayer();

        playerTurnDiv.textContent = `${activePlayer.name}'s turn`;

        board.forEach((cell, index) => {
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");

            cellButton.dataset.cell = index;
            cellButton.textContent = cell === null ? '' : cell;
            boardDiv.appendChild(cellButton);
        });
    };

    function clickHandlerBoard(e) {
        const selectedCell = e.target.dataset.cell;

        if (selectedCell === undefined) return;

        const result = game.playRound(selectedCell);
        updateScreen();

        if (result) {
            playerTurnDiv.textContent = result;
            boardDiv.removeEventListener("click", clickHandlerBoard); // Remove event listener if game is over
            inputSection.style.display = 'block';
        }
    }

    startBtn.addEventListener("click", startGame);
    resetBtn.addEventListener("click", resetGame);

    // Initialize the board with empty cells to show grid lines
    for (let i = 0; i < 9; i++) {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.cell = i;
        boardDiv.appendChild(cellButton);
    }
}

ScreenController();
