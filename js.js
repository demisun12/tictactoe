

function resetBoard() {
    console.log(board);
    board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
    console.log(board);
    console.log("Board has been reset.");
}


function Gameboard() {
    const board = [
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

    const printBoard = () => {
        console.log(board)
    };

    return {getBoard, addMarker, printBoard};
}

function GameController(playerOne, playerTwo) {
    const board = Gameboard();

    const players = [{
        name: playerOne,
        marker: 1
    }, {
        name: playerTwo,
        marker: 2
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
        board.addMarker(cell,getCurrentPlayer());

        const checkWin = () => {
            const winCombo = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [3, 4, 5],
                [1, 4, 7],
                [2, 4, 6],
                [2, 5, 8],
                [6, 7, 8]
            ];
            const boardState = board.getBoard();  
            for (const combo of winCombo) {
                const [a, b, c] = combo;
                if (boardState[a] !== null && boardState[a] === boardState[b] && boardState[b] === boardState[c]) {
                    if (boardState[a] === 1) {
                        return 'Player 1 wins!';
                    } else if (boardState[a] === 2){
                        return 'Player 2 wins!';
                    };
                };
            };
        
            if (boardState.every(cell => cell !== null)) {
                return `It's a tie!`
            };
            return null;
        };

        const result = checkWin();
        if (result) {
            console.log(checkWin());
            return;
        }

        switchPlayer();
        printNewRound();
    };

    printNewRound();
    return {playRound, getCurrentPlayer};
    
}

const game = GameController();

