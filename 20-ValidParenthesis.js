function isValid(s) {
	// stack
	const left = [];
	//legend to check
	const legend = {
		"(": ")",
		"{": "}",
		"[": "]",
	};
	//interates through the stack
	for (let i = 0; i < s.length; i++) {
		//adds to the array if it is an opening parenthesis
		if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
			left.push(s[i]);
			//compares the left popped element to the legits to the current index of string
		} else if (legend[left.pop()] !== s[i]) {
			//if its not true then it will return false
			return false;
		}
	}
	return left.length ? 0 : 1;
}
