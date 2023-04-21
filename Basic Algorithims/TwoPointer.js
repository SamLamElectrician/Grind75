//patern to iterate through data structure in tandem
//useful for searching pairs in sorted array or linked list
//Best case scenario is if the array is sorted

//Identify a problem with Two pointer
//-Feature a problem where you deal with sorted arrays or linked list and need to find a set to fufill certain constraits
// - the set of elements is a a pair, triplet, or sub array

//common problems
// - Squaring a sorted array
// - tripletes that sum zero
//comparing strings that contain backspaces

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}
