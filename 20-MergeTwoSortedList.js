//You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
	if (!list1) return list2;
	else if (!list2) return list1;
	else if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
};

var mergeTwoLists2 = function (list1, list2) {
	if (list1 === null && list2 === null) {
		return list1;
	}
	if (list1 === null) {
		return list2;
	}
	if (list2 === null) {
		return list1;
	}
	let dummyPointer = new ListNode(0);
	let currentPointer = dummyPointer;
	while (list1 && list2) {
		if (list1.val < list2.val) {
			currentPointer.next = list1;
			list1 = list1.next;
		} else {
			currentPointer.next = list2;
			list2 = list2.next;
		}
		currentPointer = currentPointer.next;
		if (list1) {
			currentPointer.next = list1;
		}
		if (list2) {
			currentPointer.next = list2;
		}
	}
	return dummyPointer.next;
};

var mergeTwoLists3 = function (list1, list2) {
	let list = new ListNode(0); //We make a new linkedlist
	if (!list1 && !list2) {
		return null;
	} //Check if both are empty, true => we return null
	if (!list1) {
		return list2;
	} //Check if the first list alone empty, true => return list2
	if (!list2) {
		return list1;
	} //Check if the second list alone empty, true => return list1

	let current1 = list1; //pointer for list1
	let current2 = list2; //pointer for list2
	let current = list; //pointer for our list

	while (current1 && current2) {
		//while list1 and list2 nodes are not empty (null)
		if (current1.val <= current2.val) {
			//check if samllest node is in list1
			current.next = current1; //assign the value to the list pointer
			current1 = current1.next; //move the list1 pointer
		} else {
			//smallest node is in list2
			current.next = current2; //assign the value to the list pointer
			current2 = current2.next; //move the list2 pointer
		}
		current = current.next; //move the list pointer
	}
	if (current1 !== null) {
		//check if there is a remaning element in list1
		current.next = current1; //assign the value to the list pointer
		current1 = current1.next; //move the list1 pointer
		current = current.next; //move the list pointer
	}
	if (current2 !== null) {
		//check if there is a remaning element in list2
		current.next = current2; //assign the value to the list pointer
		current2 = current2.next; //move the list2 pointer
		current = current.next; //move the list pointer
	}
	return list.next; //skip the first node since it is 0
};
