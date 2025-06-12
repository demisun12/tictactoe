const board = {
    row1:["","",""],
    row2:["","",""],
    row3:["","",""],
};

const playerOne = {
    name: "",
    marker: "X"
};

const playerTwo = {
    name: "",
    marker: "O"
};  

const gameFlow = {
    turn: playerOne.name,
    mark: playerOne.marker
}; //after each turn, object values should change to other players name/markers