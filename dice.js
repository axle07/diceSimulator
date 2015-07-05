function diceVal() {
	return Math.floor(Math.random() * 6 + 1);
}

function roll(numberOfDice) {
	var result =  0;
	while(numberOfDice > 0) {
		result += diceVal();
		numberOfDice--;
	}
	return result;
}
