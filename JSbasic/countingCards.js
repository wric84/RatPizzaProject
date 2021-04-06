const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard //define variable
while (currentCard != 'spade'){ //As long as the suit is not a spade
  currentCard = cards[Math.floor(Math.random() * 4)]; 
  console.log(currentCard)
}