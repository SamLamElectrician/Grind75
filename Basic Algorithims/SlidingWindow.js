//Used on a specific window to create sub array
//window size remains constant
//How to Identify
//Linear Data structure such as linked list, array or string
//eg: Max sum subarray of size 'k', longestst substring with 'K' Distinct characters, string anagrams

function maxSum(arr, n, k) {
	let max = 0;
	let sum = 0;
	// find initial sum of first k elements
	for (let i = 0; i < k; i++) {
		sum += arr[i];
		max = sum;
	}
	// iterate the array once
	// and increment the right edge
	for (let i = k; i < n; i++) {
		sum += arr[i] - arr[i - k];

		// compare if sum is more than max,
		// if yes then replace
		// max with new sum value
		if (sum > max) {
			max = sum;
		}
	}
	return max;
}

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
document.write(maxSum(arr, n, k));
