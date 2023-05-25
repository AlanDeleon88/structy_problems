class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const zipperLists = (head1, head2) => {
    let currentA = head1.next;
    let currentB = head2;
    let counter = 0;
    let tail = head1

    while(tail.next !== null){
      if(counter % 2 === 0){
        //take node from list 2
        tail.next = currentB
        if(currentB){
          currentB = currentB.next
        }

        counter++
        tail = tail.next
      }
      else{
        tail.next = currentA
        if(currentA){
          currentA = currentA.next
        }
        counter++
        tail = tail.next

      }
    }

    if(currentA === null){
      tail.next = currentB
    }
    else{
       tail.next = currentA
    }
    return head1
  };

const recursiveZipper = (head1, head2) =>{
  //base case if both head1 and 2 are null returns null
  if(head1 === null && head2 === null) return null
  // if head1 is null, return the rest of head2.
  if(head1 === null) return head2
  // vice versa here
  if(head2 === null) return head1

  //save the next variable of the current nodes
  const next1 = head1.next
  const next2 = head2.next

  //set the next node of the current node to other list
  head1.next = head2;

  // recursively call to get the next node for the 2nd list. will repeat setting head1.next to head2 until head2.next recursive call hits a basecase
  head2.next = recursiveZipper(next1, next2)

  return head1;
}

module.exports = {
  zipperLists,
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

let res = zipperLists(a, x);
// a -> x -> b -> y -> c -> z
console.log(res)
// console.log(res.next.val)
// console.log(res.next.next.val)
// console.log(res.next.next.next.val)
// console.log(res.next.next.next.next.val)
// console.log(res.next.next.next.next.next.val)
while(res !== null){
    console.log(res.val)
    res = res.next
}
