const board = [
    null, null, null,
    null, null, null,
    null, null, null
];

const players = [{
    name: "Player 1",
    marker: 1
}, {
    name: "Player 2",
    marker: 2
}];

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


let currentPlayer = players[0];

function printBoard() {
    console.log(board);
    return board;
}

function placeMarker(cell, player) {
    if (board[cell] === null) {
        board[cell] = player.marker;
        return true
    } else {
        return false
    }
}

function checkWin(board){
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
    for (const combo of winCombo) {
        const [a, b, c] = combo;
        if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
            if (board[a] === "X") {
                return 'Player 1 wins!';
            } else if (board[a] === "O"){
                return 'Player 2 wins!';
            };
        };
    };

    if (board.every(cell => cell !== null)) {
        return `It's a tie!`
    }

    return 
}


// Win Combinations:

// 0, 1, 2
// 3, 4, 5
// 6, 7, 8