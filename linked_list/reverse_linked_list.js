// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/*
input head of a linked list
output reversed linked list.

  need to have 3 variables to save nodes
  prev = null
  next = null
  current = head --> a

  iterate through linked list till current is null
  current ---> a --> b
  set next to current.next --->  b --> c
  set current.next to prev ---> null --> a
  set prev to current --> a --> b
  set current to next --> b --> c
*/
const reverseList = (head) => {
    let prev = null
    let next = null
    let current = head;


    while(current.next !== null){
      next = current.next
      current.next = prev
      prev = current
      current = next
      // console.log('next', next)
      // console.log('prev', prev)
      // console.log('current', current)

    }
    current.next = prev

  //   let getString = (current) =>{
  //     let res = ''
  //     while(current){
  //       // console.log(current)
  //       if(current.next){
  //         res += `${current.val} -> `
  //       }
  //       else{
  //         res += `${current.val}`
  //       }
  //       current = current.next

  //     }
  //     return res
  //   }
  //   let res = getString(current)

    return current


  };

  const reverseLinkedRecursive = (head, prev = null) =>{
    if(head=== null) return prev
    const next = head.next
    head.next = prev
    return reverseLinkedRecursive(next, head)
  }


  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // a -> b -> c -> d -> e -> f

  reverseList(a); // f -> e -> d -> c -> b -> a



  module.exports = {
    reverseList,
  };
