// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//method 1
var sortedSquares = function (nums) {
	let ans = [];
	for (let i = 0; i < nums.length; i++) {
		ans.push(nums[i] * nums[i]);
	}
	return ans.sort((a, b) => a - b);
};

//method 1 but cleaned up with built in functions
var sortSq = function (nums) {
	return nums.map((num) => num * num).sort((a, b) => a - b);
};
