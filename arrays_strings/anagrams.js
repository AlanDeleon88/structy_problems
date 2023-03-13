const anagrams = (s1, s2) => {
    if(s1.length !== s2.length) return false
    let stringArr1 = s1.split('').sort()
    let stringArr2 = s2.split('').sort()

    if(stringArr1.join('') === stringArr2.join('')){
      return true
    }
    else{
      return false
    }
    // console.log(s1,s2)


  };

  //! alternate solution use a hash map IE object
  //! counter characters in string key is char count is value

  //! post walkthrough / approach solution
  const anagrams_post = (s1, s2) => {
    if(s1.length !== s2.length) return false
    const count = {}

    for(let char of s1){
      if(!(char in count)){
        count[char] = 0;
      }
      count[char] += 1
    }

    for(let char of s2){
      if(char in count){
        count[char] -=1;
      }
      else{
        return false
      }
    }
    for(let char in count){
      if(count[char] !== 0){
        return false
      }
    }
    return true
  };
