let str1 = 'abca'
let str2 =  'aaca'

str2[1] = 'x'

console.log(str2)
console.log(str2 < str1)

let arr = [0,1,2,3,4]
console.log('test', arr.slice(1))

function getSubArrays(arr) {
    const subArrays = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        const subArray = arr.slice(i, j + i + 1);
        subArrays.push(subArray);
      }
    }
    return subArrays
  }

console.log(getSubArrays(arr))
