// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

//method 1 -->  two pointer
//time --> O(n) --> where n is the size of input
//space --> constant because nothing new is created but just altered
const isPalindrome = (s) => {
	//edge case in case of empty string
	if (s.length == '') return true;
	//edge case in case string is null
	if (!s || typeof s !== 'string') return false;
	//regex for changing letters
	s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
	//two pointer system to check if i and j are equal
	for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
		if (s.charAt(i) !== s.charAt(j)) return false;
	}
	return true;
};
