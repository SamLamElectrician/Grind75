// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

//method 1: two pointer system
var reverseString = function (s) {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		const temp = s[left];
		s[left] = s[right];
		s[right] = temp;

		left += 1;
		right -= 1;
	}

	return s;
};

//method 2: divide and conquer

var reverseStringTwo = function (s) {
	// destructure...
	let c = [...s];

	// replace going backwards with destructured
	for (i = 0; i < s.length; i++) {
		//compares the front of the string with back of the string
		s[i] = c[s.length - 1 - i];
	}
};
