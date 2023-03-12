// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//method 1 : using to for loops to iterate through the array and return the one with the most
//time --> O(n) since we need to iterate through the arrray
//space --> O(n) storing the numbers in the map
var majorityElement = function (nums) {
	let counts = {};
	//loop through nums array
	for (let num of nums) {
		//if the value exists in counts, then add 1. otherwise, the value is 1.
		if (counts[num]) {
			counts[num]++;
		} else {
			counts[num] = 1;
		}
	}
	//loop through the counts obj
	for (let key in counts) {
		//if the value in counts is greater than ⌊ n/2 ⌋ times.
		if (counts[key] > nums.length / 2) {
			return key;
		}
	}
};

//method 2: Boyer-Moore algo
//iterate through the nums,
var majorityElement = function (nums) {
	//count == 0 means that the candidate is not majority so we change it
	let count = 0;
	//candidate is the number with majority
	let candidate;
	//loop through the array
	for (const n of nums) {
		//if count is 0, it means that the current candidate is not majority, so we change the candidate
		if (count === 0) candidate = n;

		//If the current number is the same as candidate we add to count
		if (n === candidate) count++;
		//If the current number is different to our candidate we substract to count
		else count--;
	}

	return candidate;
};
