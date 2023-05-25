class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  /*

  input 2 linked list heads
  output a sorted merged linked list

  use 2 variable to save the head of the list as currentA and currentB

  - check which list value is lower.
  - set the lower valued head as the tail
  - set the current of the lower valued to the next node.

  iterate through the linked lists
    - each iteration i need to check the values of both lists
    - need to check if nodes are null or not
    - then compare the 2 node values
    - set the tail next node to the lower valued node
    - then set current of that node to its next
    - then set the tail to the next node

  check if either current A or B is null and set the next of the tail to the none null one
  */

  const mergeLists = (head1, head2) => {
    let tail;
    let head;
    let currentA = head1
    let currentB = head2
    if(head1.val < head2.val){
      tail = head1
      currentA = currentA.next
      console.log('A, TAIL', tail.val)
      head = head1
    }
    else{
      tail = head2
      currentB = currentB.next
      console.log('B, TAIL', tail.val)
      head = head2
    }
    while(currentA !== null && currentB !== null){
        if(currentA.val < currentB.val){
          tail.next = currentA
          currentA = currentA.next
          tail = tail.next
          }
        else{
          tail.next = currentB
          currentB = currentB.next
          tail = tail.next
        }
    }
    if(currentA === null){
      tail.next = currentB
    }
    if(currentB === null){
      tail.next = currentA
    }
    return head
  };

  const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10

mergeLists(a, q);
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 

  module.exports = {
    mergeLists,
  };
