const board = (function (){
    const row1 = ["","",""];
    const row2 = ["","",""];
    const row3 = ["","",""];
    return {row1,row2,row3};
})();

const playerOne = {
    name: "",
    marker: "X"
};

const playerTwo = {
    name: "",
    marker: "O"
};  

function createPlayer(name,marker) {
    return {name,marker};
}

const gameFlow = {
    turn: playerOne.name,
    mark: playerOne.marker
}; //after each turn, object values should change to other players name/markers

function playTurn(spot,player) {

}

function changePlayer(player) {

}