/*
  find whether the LL contains a loop
  a loop exists when a node can be revisited by continuously following the next pointers

  maybe iterate for length of list

  while curr
  - check if it exists in array
  - store the curr in an array if not
*/

function hasCycle(head) {
  let curr = head;
  let nodesSeen = [];

  while (curr) {
    if (nodesSeen.includes(curr)) {
      return true;
    } else {
      nodesSeen.push(curr);
      curr = curr.next;
    }
  }

  return false;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1)) // true
console.log(hasCycle(list2)) // true
console.log(hasCycle(list3)) // false
console.log(hasCycle(list4)) // true
console.log(hasCycle(list5)) // false
