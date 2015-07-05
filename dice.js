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

/* TEST RESULTS 
 *
 *

  var arr = [], k = 1000;
 
  while(k > 0) { arr.push(roll(2)); k--;  }
 
 
	function count(num) {
		var count = 0; 
		for (var i = 0; i < arr.length; i++) { 
			if(arr[i] == num) count++; 
		}
		return count; 
	}

*
*/
