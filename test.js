/* TEST RESULTS */

var arr = [], numberOfDice = 2;

function numberOfRolls(num) {
	while(num > 0) {
		arr.push(roll(numberOfDice));
		num--;
	}
}

function countOf(num) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == num) count++;
	}
	return count;
}

numberOfRolls(1000);
countOf(2);
