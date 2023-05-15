var userCards = document.getElementById("user-cards");
var dealerCards = document.getElementById("dealer-cards");
let playerHand = [];
let dealerHand = [];
let userSum = 0
let dealerSum = 0 


function openInstructions(){
	const modal = document.getElementById("myModal");
	modal.style.display = "block";


}

function closeInstructions(){
	const modal = document.getElementById("myModal");
	modal.style.display = "none";


}

function hit (){
	var sum  = document.getElementById("userSum");
	let card1 = getCard();
	playerHand.push(card1);
	userCards.innerText = "These are the user cards:" + playerHand;
	userSum = userSum + card1
	sum.innerText = "This is the Sum of your cards:" + userSum
	if (userSum > 21) {
		alert("You have busted. You lose.")


	}


}

function stay (){
	while (dealerSum < 16) {
		let card1 = getCard();
		dealerHand.push(card1);
		dealerCards.innerText = "These are the dealer cards:" + dealerHand;
		dealerSum = card1 + dealerSum
	}
	

	if (dealerSum > 21){
		alert("You win!")
	} else if (dealerSum == userSum){
		alert("You tied.")
	}else if (dealerSum > userSum){
		alert("Dealer Wins!")
	} else {
		alert("User Wins")
	}
	var hitbutton = document.getElementById("hit");
	hitbutton.disabled = true;
	var staybutton = document.getElementById("stay");
	staybutton.disabled = true;

} 


function startGame (){

	playerHand = [];
	dealerHand = [];
	sum = 0
	let card1 = getCard();
	playerHand.push(card1);
	
	let card2 = getCard();
	playerHand.push(card2);
	
	let card3 = getCard();
	dealerHand.push(card3);

	let card4 = getCard();
	dealerHand.push(card4);
	

	
dealerSum = card3 + card4
	var sum  = document.getElementById("userSum");
	userSum = card1 + card2
	userCards.innerText = "These are the user cards:" + playerHand;
	dealerCards.innerText = "These are the dealer cards:" + dealerHand;
	sum.innerText = "This is the Sum of your cards:" + userSum

	var hitbutton = document.getElementById("hit");
	hitbutton.disabled = false;
	var staybutton = document.getElementById("stay");
	staybutton.disabled = false;

	
}

function getCard(){
	var minInt = 1;
	var maxInt = 10;
	var card = Math.floor(Math.random()*(maxInt-minInt +1 )+minInt);
	return card;
	
} 


function checkForEndCondition(){
	//get user and dealer sum 
	//if dealer sum > 21 -> user wins
	// else if dealer sum = user sum -> tie 
	// else if dealer sum >  user sum -> dealer wins 
	// else -> user wins 
}