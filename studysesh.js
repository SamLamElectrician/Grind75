function sockMerchant(n, ar) {
	//create a map
	let map = {};
	let count = 0;
	//iterate through the array and add each sock into the map
	for (let i = 0; i < ar.length; i++) {
		map[ar[i]] ? map[ar[i]]++ : (map[ar[i]] = 1);
	}

	for (const item in map) {
		const match = Math.trunc(map[item] / 2);
		count += match;
		// if (map[item] / 2 == 0) {

		// } else if (map[item] % 2 > 0) {
		// 	n -= 1;
		// }
		// return n;
		// }
		//iterate through the map to find even and odd pairs
	}
	return count;
}
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 9;
console.log(sockMerchant(n, ar));

//expectation 10:1, 20:1
