/*
  input: string 2c3a1t - input will alternate between a number and character,
   the number is the amount of times the character will be repeated in the output.
  output: ccaaat

  - goal is to try pair off the number and its corresponding character.goal
  then iterate the amount need to get correct output.
  - could convert the string to an array. then do 2 filters one to check the type of
  - this should give us 2 arrays of the same length, one array with numbers and one array with characters
  - then do an iteration with a for loop to the length of the array.then
  - each iteration do a another loop with the number arrays as the limit, then add the characters
   to the result string in each iteration.

*/

// !Original solution
const getNumbers = (s) =>{
  sCopy = s;
  let numArr = []
  let counter = 0
  let pointerStart = 0
  let pointerEnd = 0
  while(counter < s.length){
    if(isNaN(s[counter])){
      //character reached

      //update the endpointer to the characters position
      pointerEnd = counter;
      let num;
      if(pointerStart === 0){
        num = sCopy.slice(pointerStart, pointerEnd)
      }
      else{
        num = sCopy.slice(pointerStart + 1, pointerEnd)
      }

    //   console.log(num)
      numArr.push(Number(num))
      pointerStart = counter
    }
    counter++
  }
  return numArr
}

const uncompress = (s) => {
  console.log(s)
  //need to figure out a way to check for numbers
  // maybe iterate through the string until a character is reached
  // then once a character is reached take the numbers and push them to an array

  let sNums = getNumbers(s)

  let sChars = s.split('').filter(el =>{
    if(isNaN(Number(el))){
      return true
    }
  })
  let res = ''
  // console.log(sNums)
  // console.log(sChars)

  for(let i = 0; i < sNums.length; i++){
    for(let j = 0; j < sNums[i]; j++){
      res += sChars[i]
    }
  }
//   console.log(res)

  return res

  };

//!Post approach / walkthroug soluttion

const uncompress_post = (s) =>{
    const numbers ='0123456789'
    let result = []
    let pointerStart = 0
    let pointerEnd = 0

    while(pointerEnd < s.length){
        if(numbers.includes(s[pointerEnd])){
            pointerEnd +=1
        }
        else{
            const num = Number(s.slice(pointerStart, pointerEnd))
            for(let count = 0; count < num; count++){
                result.push(s[pointerEnd])
            }
            pointerEnd += 1
            pointerStart = pointerEnd
        }
    }
    return result.join('')
}

console.log(uncompress("2c3a1t")); // -> 'ccaaat');
console.log(uncompress("4s2b")); // -> 'ssssbb'

console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); //'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
