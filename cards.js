// creat cards
var card1 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63];
var card2 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];
var card3 = [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];
var card4 = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,56,57,58,59,60,61,62,63];
var card5 = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47,50,51,54,55,58,59,62,63];
var card6 = [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63];

// selected number
let answer = 0;

let currentCard = 1;

// display card1 when user loads for the first time
createCard(card1);

// create a card div based on card 
function createCard(card){
  var cardDiv = document.getElementById('card');
  cardDiv.innerHTML = '';
  cardDiv.className = "card";
  card.forEach(function(item, index){
	  var cardItem = document.createElement('div');
    cardItem.className = 'cardItem';
    cardItem.innerHTML = item;
    cardDiv.appendChild(cardItem);
  });
}

// user clicks on yes button add first digit of the card and display next card
function yes() {
  switch(currentCard){
    case 1:answer += card1[0]; break;
    case 2:answer += card2[0]; break;
    case 3:answer += card3[0]; break;
    case 4:answer += card4[0]; break;
    case 5:answer += card5[0]; break;
    case 6:answer += card6[0];
          alert(answer); break;
    default: break;
  }
		getCard(currentCard++);
}

// user clicks no display next card
function no(){
	if(currentCard == 6){
		alert(answer);
	}
    getCard(currentCard++);
}

// get the card to display
function getCard(){
  switch(currentCard){
    case 1:createCard(card1); break;
    case 2:createCard(card2); break;
    case 3:createCard(card3); break;
    case 4:createCard(card4); break;
    case 5:createCard(card5); break;
    case 6:createCard(card6); break;
    default:currentCard = 1;
            answer = 0;
            createCard(card1);
            break;
  }
}