//time is o(n^2) due to two 4 loops
var result = "x ";
for (var i = 0; i < 11; i++) {
	for (var j = 0; j < 11; j++) {
		if (i == 0 && j > 0) {
			result += "[" + j + "]";
		} else if (j == 0 && i > 0) {
			result += "[" + i + "] ";
		} else if (i > 0 && j > 0) {
			result += i * j + " ";
		}
	}
	result += "\n";
}

console.log(result);

//solution 2

// Define the size of the multiplication table
const size = 10;
// Create an empty array to hold the table
const table = [];
// Generate the table
for (let i = 1; i <= size; i++) {
	// Create an empty array to hold the current row
	const row = [];
	for (let j = 1; j <= size; j++) {
		// Multiply the current row and column numbers and push the result to the row array
		row.push(i * j);
	}
	// Push the row array to the table array
	table.push(row);
}
// Print the table
console.table(table);
