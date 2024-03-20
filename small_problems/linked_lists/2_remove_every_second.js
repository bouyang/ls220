/*
  given singly LL, remove every alternate node starting with second node

  prev and curr
  increment node counter
  when node counter is odd, prev.next to curr, curr to curr.next
  when node counter is even, prev.next to curr.next, curr to curr.next
*/

function removeEverySecondNode(head) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  let nodeCounter = 1;

  while (curr) {
    if (nodeCounter % 2 === 1) {
      prev = curr;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
    nodeCounter += 1;
  }

  return dummy.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([]);

printLinkedList(removeEverySecondNode(list1)); // Expected: 1 -> 3 -> 5 -> null
printLinkedList(removeEverySecondNode(list2)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list3)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list4)); // Expected: 1 -> 3 -> null
printLinkedList(removeEverySecondNode(list5)); // Expected: null