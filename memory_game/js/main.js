// wdi memory game



let cardThree = "king";
let cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " +cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " +cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0]==cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry. Try again");
  }
}
