/*
 input a linked list head and an index
 output the value at the current index

 if index has value outside the range of the linked list return null

  declare a variable and assign the value 0 to represent the current index of linked list
  declare and assign a variable to hold the current node
  iterate through the linked list using a while loop and keep looping till current node is null
  each iteration, check if the current index is equal to the current index, if it is equal then return the node's value
  if not increase index by 1 and set the current to the current.next node.
  OR could do the same thing with a forloop
  iterate through the linked list up to the target index
  return the value at the end of the iteration.
*/

const getNodeValue = (head, index) => {
    //! iterative
  //   let current = head
  //   let val;
  //   for(let i = 0; i <= index; i++){
  //     if(current){
  //       val = current.val
  //       current = current.next
  //     }
  //     else{
  //       val = null
  //     }


  //   }
  //   return val
    if(!head) return null
    if(index === 0){
      if(head){
        return head.val
      }
      else return null
    }
    return getNodeValue(head.next, index - 1)
  };



  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  // a -> b -> c -> d

  console.log(getNodeValue(a, 3)); // 'd'

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 7); // null
