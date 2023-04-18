//time complexity is o(n) because we are iterating through both input (linear time)
//space complexity o(n)
var firstUniqChar = function (s) {
	//edge cases
	if (!s) return -1;
	if (s.length === 1) return 0;
	// Create a new empty map object.
	let map = {};
	// We will use this object to store the letter  as the Key, and the number of times we have seen this letter as the Keys Value.
	// EG. {"a": 2, "b" : 1}

	// Loop over each letter in the string
	for (let char of s) {
		// Check if the current letter is a key in the map.
		// If it is, increment its value. Meaning we have seen this letter more than once.
		// If it's not in the map, we have not seen this letter before so we make a Key in the map with the value of 1.
		map[char] ? map[char]++ : (map[char] = 1);
	}
	// Loop over the finished map and find the first letter in map that has a value of 1. And return it's index within the input string.
	for (var i = 0; i < s.length; i++) {
		if (map[s[i]] === 1) {
			return i;
		}
	}
	// if no key in map has a value of 1. Return -1
	return -1;
};

//faster solution
//space complexity is o(1) due to not creating new structures
//time complexity is o(n) due  to one loop through the array
var firstUniqChar2 = function (s) {
	//edge cases
	if (!s) return -1;
	if (s.length === 1) return 0;

	for (var i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return s.charAt(i);
		}
	}
	return -1;
};
console.log(firstUniqChar2("racecar"));
