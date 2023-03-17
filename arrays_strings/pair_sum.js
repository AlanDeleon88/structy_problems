/*
  input: an array and a target sum
  output: an array of indexes of the numbers that add up to the inputted target sum

  nested for-loop where every iteration of the outer loop changes the first numbers
  in the nesteed loop the outer number will be added to every other number in the array
  if the pairs sum match the target integer, the 2 indexes will be pushed to the result array


*/
// const pairSum = (numbers, targetSum) => {
//   let res = []

//   for (let i = 0; i< numbers.length; i++){
//     let num1 = numbers[i]

//     for(let j = i+1; j < numbers.length; j++){
//       let num2 = numbers[j]
//       if  (num1 + num2 === targetSum){
//         res.push(i,j)
//       }
//     }
//   }
//   // console.log(res)
//   return res
// };
/*
  post-approach plan
  input: array of numbers and target sum
  output: an array containing indicies of numbers array that equal target sum
  - create an object to store key value pairs of number and index.
  - iterate through array
  - check if the complement IE current number - target sum, exists as a key in the object.
  - if not save the current number as a key, and its index as the value
  - once a complement is found as a key in the object, push the value of that key and the current index to a result array and return.
*/
const pairSum = (numbers, targetSum) => {
    const prev = {}
    let res =[]
    // console.log(numbers)
    for(let i = 0; i < numbers.length; i++){
      let num = numbers[i]
      let comp = targetSum - num
      if(prev[comp] !== undefined){
        res = [prev[comp], i]
      }
      if(prev[num] === undefined){
        prev[num] = i
      }

    }
    // console.log(res)
    return res
  };
  console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]

  console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]

  console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]

  console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]

  console.log(pairSum([9, 9], 18)); // -> [0, 1]

  console.log(pairSum([6, 4, 2, 8 ], 12)); // -> [1, 3]
