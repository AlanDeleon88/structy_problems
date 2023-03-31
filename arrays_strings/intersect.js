
/*
  input 2 arrays
  output a new array with values that occur in both arrays

  create an obj to store elements as keys, and values as their index in the array.
  create an array to store same elements.
  iterate through first array saving the elements as keys.
  iterate through second array.
  on each iteration check if the element exists as a key in the object.on
  if it does, push the current element to the result array
  return the array.

*/

const intersection = (a, b) => {
    let res = [];
    let prev = {}
    for(let i = 0; i < a.length; i++){
      let num = a[i];
      prev[num] = i
    }
    for(let i = 0; i < b.length; i++){
      let num = b[i];
      if(prev[num] !== undefined){
        res.push(num)
      }
    }
    return res;
  };

  module.exports = {
    intersection,
  };

  //! structy solution

  const intersectionStructy = (a, b) => {
    const result = [];
    const setA = new Set(a);
    for (let item of b) {
      if (setA.has(item)) {
        result.push(item);
      }
    }
    return result;
  };



intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
intersection([2,4,6], [4,2]) // -> [2,4]
intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
intersection([0,1,2], [10,11]) // -> []
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]
