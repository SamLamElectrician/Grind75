// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//method 1: For Loops
//compares two elements using a for loop
var twoSum = function (nums, target) {
	//time complexity = O(n^2) --> going through array twice
	//Space complexity = o(1) --> no extra memory --> constant
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

//Method 2:hashmaps
//time complexity = O(n)
//space complexity = O(1)

var TwoSumTwo = function (nums, target) {
	let map = {};
	//checks compliment pairings
	for (let i = 0; i < nums.length; i++) {
		//sets a value as num of index
		let value = nums[i];
		//checks for the complement number to the target
		let complimentNum = target - value;
		//if compliment in the map return the value
		if (map[complimentNum] !== undefined) {
			return [map[complimentNum], i];
			//if not in the map, add to the map
		} else {
			map[value] = i;
		}
	}
};
