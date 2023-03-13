/*
input: 'ccaaatss'
output: '2c3at3s' -> number represents repeated char in string, if only 1 instance of char, it will be the char

 iterate through string counting repeated characters
 declare and assign variable for counter at 0.
 declare variable for current char as first char in string
 declare and assign variable for the result as an empty array.

 iterate through the string
 on iteration check if the string[i] is equal to current char.
 if it is add 1 to counter.
 when it is not push a value of counter + current char.
 then set counter to 1 and set current char to the current index.

 after loop
 join result array and return

*/

const compress = (s) => {
    // console.log(s)
    let counter = 0;
    let currentChar = s[0]
    let res = []

    for(let i = 0 ; i < s.length; i++){
      // console.log(s[i])
      if(currentChar === s[i]){
        counter += 1
      }
      else{
        if(counter === 1){
          res.push(`${currentChar}`)
        }
        else{
          res.push(`${counter}${currentChar}`)
        }

        currentChar = s[i]
        counter = 1
      }
    }

    if(counter === 1){
      res.push(currentChar)
    }
    else{
      res.push(`${counter}${currentChar}`)
    }
    // console.log(res.join(''))
    return res.join('')
  };
