/*

 input: array of numbers and a target product
 output: the index of the 2 elements that multiply to meet the target product


assign a variable to an empty object.
iterate through the array.
on each iteration create a key value pair in our object with the key being the element and the value being the index
then assign a variable to store a value of the target product divided by the current element,
then check if that qoutient as a key in the object exists, if it does, save an array of the value of the keyed
into object and the current index.

*/
const pairProduct = (numbers, targetProduct) => {
    let result = []
    let prev = {}

    for(let i = 0; i < numbers.length; i++){
      let num = numbers[i];
      prev[num] = i;
      console.log(prev)
      let quotient = targetProduct / num;
      console.log('quotient', quotient)
      if(prev[quotient] !== undefined){
        result = [prev[quotient], i]
      }
    }
    return result;
  };

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]



  module.exports = {
    pairProduct,
  };
