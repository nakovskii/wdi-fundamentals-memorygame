// wdi memory game



let cardThree = "king";
let cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
} // end function



function flipCard(cardId){
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
  return"User flipped " + cards[cardId];
}

flipCard(0);
flipCard(2);
