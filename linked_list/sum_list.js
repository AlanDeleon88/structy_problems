const sumList = (head) => {
//   let current = head
//   let sum = 0;

//   while(current !== null){
//     sum += current.val;
//     current = current.next
//   }
//   return sum
  if(!head){
    return 0
  }
  return head.val += sumList(head.next)
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

console.log(sumList(a)); // 19

const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

console.log(sumList(x)); // 42


module.exports = {
  sumList,
};
