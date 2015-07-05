/* SCRIPT FOR TESTING RESULTS
*
* Simulates 1000 rolls of the a number of dice determined by 'numberOfDice'
* "count(num) returns occurrances of that value, e.g., "count(2)" below
* returns the number of times a 2 was rolled.
*
*/
var arr = [], 
		numberOfRolls = 1000, 
		numberOfDice = 2;

while(numberOfRolls > 0) { 
	arr.push(roll(numberOfDice)); 
	numberOfRolls--;  
}


function count(num) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == num) count++;
  }
  return count;
}

count(2);
