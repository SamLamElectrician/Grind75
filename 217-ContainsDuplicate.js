//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//method 1: hashmaps
var containsDuplicate = function (nums) {
	//create a hashmap
	let hashMap = {};
	//iterate through the array
	for (let i = 0; i < nums.length; i++) {
		//return true if hashmap contains the number more than twice
		if (hashMap[nums[i]]) {
			return true;
		} else {
			//add to the hashmap if only appears once
			hashMap[nums[i]] = true;
		}
	}
	return false;
};

//method 2: sets
// time
var containsDuplicateTwo = function (nums) {
	//removes duplicates
	let obj = new Set(nums);

	//if not the same size, a duplicate must exist
	if (obj.size !== nums.length) return true;
	return false;
};
