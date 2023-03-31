/*
input an array with random numbers and 5s
output the same array with all the 5s moved to the end.

 declare 2 pointer variables initialize them to 0
 this pointer will point to elements in the array while we are mutating it.

 create a while loop with a condition that it will run
 until the pointer is less than the length of the array.

 during the while loop check if the current element the pointer is at
 is equal to 5.
 if it is equal to 5
 splice out the current element and move it to the back of the array.
 keep fivePointer the same and increase lengthPointer by 1
 reapeat until pointer reaches the array length
 return function at the end.

*/

const fiveSort = (nums) => {
    let fivePointer = 0;
    let lengthPointer = 0;

    while(lengthPointer < nums.length){
      let num = nums[fivePointer];
      if(num === 5){
        let five = nums.splice(fivePointer, 1);
        nums.push(...five)
        // fivePointer += 1
        lengthPointer +=1
      }
      else{
        fivePointer +=1
        lengthPointer +=1
      }
    }
    return nums;
  };


  //! post approach

  const five_sort_approach = (nums) =>{
    let i = 0;
    let j = nums.length - 1;

    while(i <= j){
      let front = nums[i]
      let back = nums[j]
      // console.log('front', front)
      // console.log('back', back)
      if(back === 5){
        //NOP
        j -= 1
      }
      else{
        if(front === 5){
          let tempVar = back
          // console.log(`swapping ${back} with ${front}`)
          nums[j] = front
          nums[i] = back
          i += 1
        }
        else{
          i += 1
        }

      }

    }
    return nums
  };

  module.exports = {
    fiveSort,
  };






console.log(fiveSort([12, 5, 1, 5, 12, 7]))
// -> [12, 7, 1, 12, 5, 5]

console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]))
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]))
// -> [4, 1, 1, 1, 5, 5, 5]

console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]))
// -> [6, 5, 5, 5, 5, 5, 5]

console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]))
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums)
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
