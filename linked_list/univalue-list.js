// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/*
  input: head of linked list
  output: boolean

  - declare and assign a a current variable to  hold our spot in the linked list.declare
  - declare and assign a uniValue variable to hold initial value
  - declare an isUni boolean variable and set to true
  - create a while loop to iterate linked list.
    - each iteration check if the current node val is equal to the unival
      - if no set isUni to false else do nothing
  - after the iteration is complete, return isUni

*/

const isUnivalueList = (head) => {
    let current = head;
    let uniVal = head.val
    let isUni = true;
    while(current){
      if(current.val !== uniVal){
          isUni = false
      }
      current = current.next
    }
    return isUni
  };


  const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

isUnivalueList(u); // true

// const u = new Node(2);
// const v = new Node(2);
// const w = new Node(3);
// const x = new Node(3);
// const y = new Node(2);

// u.next = v;
// v.next = w;
// w.next = x;
// x.next = y;

// // 2 -> 2 -> 3 -> 3 -> 2

// isUnivalueList(u); // false

  module.exports = {
    isUnivalueList,
  };
