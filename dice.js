function diceVal() {
	return Math.floor(Math.random() * 6 + 1);
}

function roll(times) { 
	var result =  0;
	while(times > 0) {
		result += diceVal();
		times--;
	}
	return result;
}
