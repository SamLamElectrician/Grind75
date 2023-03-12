// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//method 1:stack plus hash map
//time is O(n) where it is the length of the string
//space is o(n) due to the length of the stack
function isValid(s) {
	//start the stack
	const left = [];
	//indicate the legend
	const legend = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	//iterate through the array
	for (let i = 0; i < s.length; i++) {
		//if the i is here push the opening bracket type to the stack
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			//append it to the stack
			left.push(s[i]);
			//if the legend of the last in the stack does not equal to the string(i), it does not complete the pairing
			//compares kv pairs to the s[i] to ensure pairing
		} else if (legend[left.pop()] !== s[i]) {
			return false;
		}
	}
	//if there are still items in the array, then it doesnt work out because there are still open brackets
	return left.length ? false : true;
}
