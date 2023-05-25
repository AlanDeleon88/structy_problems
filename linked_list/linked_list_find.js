// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/*
  input a linked list head, and a target
  output boolean true or false if the linked list contains the target balue

  use recursion to iterate through linked list.
  base case will be if the crrent node is null
  when it is null return false
  first we will check if the value is equal to the target
  if it is equal return true
  if not check if it is null
  if it is return false

  then return a recursive call of function with head.next and value as its params.
*/
const linkedListFind = (head, target) => {
  if(!head) return false
  if(head.val === target) return true
  return linkedListFind(head.next, target)
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true


// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// linkedListFind(a, "q"); // false



module.exports = {
  linkedListFind,
};
